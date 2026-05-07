<?php
session_start();
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
$password = trim((string)($payload['password'] ?? ''));

if ($email === '' || $password === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email and password are required']);
    exit;
}

$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Missing API configuration']);
    exit;
}

$config = require $configPath;
$adminEmail = trim((string)($config['adminEmail'] ?? ''));
$adminPassword = trim((string)($config['adminPassword'] ?? ''));
$adminPasswordHash = trim((string)($config['adminPasswordHash'] ?? ''));

if ($adminEmail === '' || ($adminPassword === '' && $adminPasswordHash === '')) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Admin credentials are not configured']);
    exit;
}

$authenticated = false;
if ($email === $adminEmail) {
    if ($adminPasswordHash !== '') {
        $authenticated = password_verify($password, $adminPasswordHash);
    } else {
        $authenticated = $password === $adminPassword;
    }
}

if (!$authenticated) {
    http_response_code(401);
    echo json_encode(['success' => false, 'message' => 'Invalid email or password']);
    exit;
}

session_regenerate_id(true);
$_SESSION['admin_authenticated'] = true;

echo json_encode(['success' => true, 'message' => 'Authenticated']);
