<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed']);
    exit;
}

$rawBody = file_get_contents('php://input');
$payload = json_decode($rawBody, true);

if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid JSON body']);
    exit;
}

$fullName = trim((string)($payload['fullName'] ?? ''));
$email = trim((string)($payload['email'] ?? ''));
$phone = trim((string)($payload['phone'] ?? ''));
$businessName = trim((string)($payload['businessName'] ?? ''));

if ($fullName === '' || $email === '' || $phone === '') {
    http_response_code(400);
    echo json_encode(['message' => 'Missing required fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid email address']);
    exit;
}

$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode(['message' => 'Missing API config file']);
    exit;
}

$config = require $configPath;
$fromEmail = trim((string)($config['fromEmail'] ?? ''));
$fromName = trim((string)($config['fromName'] ?? 'GPOS Website'));
$recipientEmail = trim((string)($config['recipientEmail'] ?? ''));

if ($fromEmail === '' || $recipientEmail === '') {
    http_response_code(500);
    echo json_encode(['message' => 'Mail configuration is missing']);
    exit;
}

$subject = 'New GPOS Demo Request';
$safeFullName = htmlspecialchars($fullName, ENT_QUOTES, 'UTF-8');
$safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$safePhone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$safeBusinessName = htmlspecialchars($businessName, ENT_QUOTES, 'UTF-8');

$emailHtml = '
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Demo Request</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:20px 10px;background:#f1f5f9;">
        <tr>
            <td align="center">
                <table role="presentation" width="620" cellpadding="0" cellspacing="0" style="max-width:620px;background:#ffffff;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden;">
                    <tr>
                        <td style="padding:20px 24px;background:linear-gradient(135deg,#0f766e,#0891b2);color:#ffffff;">
                            <h2 style="margin:0;font-size:22px;line-height:1.2;">New Demo Request</h2>
                            <p style="margin:8px 0 0;font-size:13px;opacity:.9;">Submitted from GPOS website</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:20px 24px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                                <tr>
                                    <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;width:190px;">Full name</td>
                                    <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:14px;font-weight:600;">' . $safeFullName . '</td>
                                </tr>
                                <tr>
                                    <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;">Email</td>
                                    <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:14px;font-weight:600;">' . $safeEmail . '</td>
                                </tr>
                                <tr>
                                    <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;">Phone</td>
                                    <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:14px;font-weight:600;">' . $safePhone . '</td>
                                </tr>
                                <tr>
                                    <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;">Business name</td>
                                    <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:14px;font-weight:600;">' . ($safeBusinessName !== '' ? $safeBusinessName : '<i style="color:#94a3b8;font-weight:normal;">Not provided</i>') . '</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:14px 24px;background:#f8fafc;color:#64748b;font-size:12px;">
                            Reply to this email to contact the customer directly.
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>';

$headers = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: ' . $fromName . ' <' . $fromEmail . '>',
    'Reply-To: ' . $fullName . ' <' . $email . '>',
]);

if (!mail($recipientEmail, $subject, $emailHtml, $headers)) {
    http_response_code(500);
    echo json_encode(['message' => 'Mail send failed']);
    exit;
}

http_response_code(200);
echo json_encode(['message' => 'Email sent successfully']);
