<?php
// Newsletter subscription endpoint
// Create the following MySQL table before using this endpoint:
//
// CREATE TABLE `newsletter_subscribers` (
//   `id` int unsigned NOT NULL AUTO_INCREMENT,
//   `email` varchar(255) NOT NULL,
//   `source` varchar(100) NOT NULL DEFAULT 'website-footer',
//   `subscribed_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
//   PRIMARY KEY (`id`),
//   UNIQUE KEY `email_unique` (`email`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$rawBody = file_get_contents('php://input');
$payload = json_decode($rawBody, true);

if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON body']);
    exit;
}

$email = trim((string)($payload['email'] ?? ''));
$source = trim((string)($payload['source'] ?? 'website-footer'));

if ($email === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email is required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Missing API configuration']);
    exit;
}

$config = require $configPath;
$fromEmail = trim((string)($config['fromEmail'] ?? ''));
$fromName = trim((string)($config['fromName'] ?? 'GPOS Website'));
$recipientEmail = trim((string)($config['recipientEmail'] ?? ''));
$dbHost = trim((string)($config['dbHost'] ?? ''));
$dbUser = trim((string)($config['dbUser'] ?? ''));
$dbPass = trim((string)($config['dbPass'] ?? ''));
$dbName = trim((string)($config['dbName'] ?? ''));
$newsletterTable = trim((string)($config['newsletterTable'] ?? 'newsletter_subscribers'));

if ($fromEmail === '' || $recipientEmail === '' || $dbHost === '' || $dbUser === '' || $dbName === '') {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail or database configuration is missing']);
    exit;
}

$mysqli = new mysqli($dbHost, $dbUser, $dbPass, $dbName);
if ($mysqli->connect_errno) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database connection failed']);
    exit;
}

$insertSql = "INSERT INTO `$newsletterTable` (`email`, `source`, `subscribed_at`) VALUES (?, ?, NOW()) ON DUPLICATE KEY UPDATE `subscribed_at` = VALUES(`subscribed_at`), `source` = VALUES(`source`);";
$statement = $mysqli->prepare($insertSql);
if ($statement === false) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to prepare database query']);
    exit;
}

$statement->bind_param('ss', $email, $source);
if (!$statement->execute()) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to save subscriber']);
    exit;
}

$safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$subject = 'New Newsletter Subscription';
$emailHtml = "<!doctype html>
<html>
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <title>New Newsletter Subscription</title>
</head>
<body style=\"margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;\">
    <table role=\"presentation\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding:20px 10px;background:#f1f5f9;\">
        <tr>
            <td align=\"center\">
                <table role=\"presentation\" width=\"620\" cellpadding=\"0\" cellspacing=\"0\" style=\"max-width:620px;background:#ffffff;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden;\">
                    <tr>
                        <td style=\"padding:20px 24px;background:#032C7E;color:#ffffff;\">
                            <h2 style=\"margin:0;font-size:22px;line-height:1.2;\">New Newsletter Subscription</h2>
                            <p style=\"margin:8px 0 0;font-size:13px;opacity:.9;\">A new subscriber has joined the newsletter.</p>
                        </td>
                    </tr>
                    <tr>
                        <td style=\"padding:20px 24px;\">
                            <table role=\"presentation\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">
                                <tr>
                                    <td style=\"padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;width:160px;\">Email</td>
                                    <td style=\"padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:14px;font-weight:600;\">$safeEmail</td>
                                </tr>
                                <tr>
                                    <td style=\"padding:10px 0;color:#64748b;font-size:13px;\">Source</td>
                                    <td style=\"padding:10px 0;color:#0f172a;font-size:14px;font-weight:600;\">" . htmlspecialchars($source, ENT_QUOTES, 'UTF-8') . "</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>";

$headers = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: ' . $fromName . ' <' . $fromEmail . '>',
    'Reply-To: ' . $fromEmail,
]);

if (!mail($recipientEmail, $subject, $emailHtml, $headers)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send notification email']);
    exit;
}

echo json_encode(['success' => true, 'message' => 'Subscribed successfully']);
