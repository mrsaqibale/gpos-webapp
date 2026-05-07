<?php
session_start();
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

if (empty($_SESSION['admin_authenticated'])) {
    http_response_code(401);
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'message' => 'Unauthorized']);
    exit;
}

$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'message' => 'Missing API configuration']);
    exit;
}

$config = require $configPath;
$dbHost = trim((string)($config['dbHost'] ?? ''));
$dbUser = trim((string)($config['dbUser'] ?? ''));
$dbPass = trim((string)($config['dbPass'] ?? ''));
$dbName = trim((string)($config['dbName'] ?? ''));
$newsletterTable = trim((string)($config['newsletterTable'] ?? 'newsletter_subscribers'));

if ($dbHost === '' || $dbUser === '' || $dbName === '') {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'message' => 'Database configuration is missing']);
    exit;
}

$mysqli = new mysqli($dbHost, $dbUser, $dbPass, $dbName);
if ($mysqli->connect_errno) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'message' => 'Database connection failed']);
    exit;
}

$formatCsv = trim((string)($_GET['format'] ?? '')) === 'csv';
$query = "SELECT `id`, `email`, `source`, `subscribed_at` FROM `$newsletterTable` ORDER BY `subscribed_at` DESC";
$result = $mysqli->query($query);
if ($result === false) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'message' => 'Failed to load subscriber data']);
    exit;
}

$subscribers = [];
while ($row = $result->fetch_assoc()) {
    $subscribers[] = $row;
}

if ($formatCsv) {
    header('Content-Type: text/csv; charset=UTF-8');
    header('Content-Disposition: attachment; filename="newsletter-subscribers.csv"');
    $output = fopen('php://output', 'w');
    fputcsv($output, ['ID', 'Email', 'Source', 'Subscribed At']);
    foreach ($subscribers as $subscriber) {
        fputcsv($output, [$subscriber['id'], $subscriber['email'], $subscriber['source'], $subscriber['subscribed_at']]);
    }
    fclose($output);
    exit;
}

header('Content-Type: application/json');
echo json_encode(['success' => true, 'subscribers' => $subscribers]);
