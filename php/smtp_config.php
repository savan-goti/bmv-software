<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$config_file = 'smtp_settings.json';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Handle GET - Read settings
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($config_file)) {
        echo file_get_contents($config_file);
    } else {
        echo json_encode([
            "mailer" => "smtp",
            "host" => "lyrovix.com",
            "port" => "465",
            "username" => "_mainaccount@lyrovix.com",
            "password" => "ngh5Uw,gQA(YiLaO",
            "encryption" => "ssl",
            "from_email" => "_mainaccount@lyrovix.com",
            "from_name" => "Lyrovix System"
        ]);
    }
    exit;
}

// Handle POST - Update settings
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    if ($data) {
        // Simple validation
        if (isset($data['host']) && isset($data['username']) && isset($data['password'])) {
            file_put_contents($config_file, json_encode($data, JSON_PRETTY_PRINT));
            echo json_encode(["status" => "success", "message" => "Settings updated successfully"]);
        } else {
            http_response_code(400);
            echo json_encode(["status" => "error", "message" => "Invalid data"]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "No data provided"]);
    }
    exit;
}
?>