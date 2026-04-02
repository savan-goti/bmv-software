<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Automatic detection
$is_local = in_array($_SERVER['REMOTE_ADDR'], ['127.0.0.1', '::1']);

if ($is_local) {
    // Gmail for local
    $smtp = [
        "mailer" => "smtp",
        "host" => "smtp.gmail.com",
        "port" => "587",
        "username" => "savansoftware8@gmail.com",
        "password" => "ahontblnfajxlsqp",
        "encryption" => "tls",
        "from_email" => "savansoftware8@gmail.com",
        "from_name" => "Lyrovix System"
    ];
} else {
    // Live server
    $smtp = [
        "mailer" => "smtp",
        "host" => "lyrovix.com",
        "port" => "465",
        "username" => "_mainaccount@lyrovix.com",
        "password" => "ngh5Uw,gQA(YiLaO",
        "encryption" => "ssl",
        "from_email" => "_mainaccount@lyrovix.com",
        "from_name" => "Lyrovix System"
    ];
}

// 2. Get Form Data
$name = $_POST['name'] ?? '[Client Name]';
$email = $_POST['email'] ?? '[Email Address]';
$phone = $_POST['phone'] ?? '[Phone Number]';
$company = $_POST['company'] ?? '[Company Name]';
$service = $_POST['service'] ?? '[Selected Service]';
$budget = $_POST['budget'] ?? '[Budget Range]';
$details = $_POST['details'] ?? '[Full Message]';

// 3. Load Email Template
$template_path = '../emails/lyrovix_message_email.html';
if (!file_exists($template_path)) {
    die(json_encode(["status" => "error", "message" => "Email template not found at $template_path"]));
}
$template = file_get_contents($template_path);

// 4. Replace Placeholders
$template = str_replace('[Client Name]', $name, $template);
$template = str_replace('[Email Address]', $email, $template);
$template = str_replace('[Phone Number]', $phone, $template);
$template = str_replace('[Company Name]', $company, $template);
$template = str_replace('[Selected Service]', $service, $template);
$template = str_replace('[Budget Range]', $budget, $template);
$template = str_replace('[Full Message]', $details, $template);
// Determine priority
$priority = 'Medium';
if (strpos(strtolower($service), 'ready-made') !== false)
    $priority = 'High';
$template = str_replace('[High / Medium / Low]', $priority, $template);


// 5. Send Email via PHPMailer (Highly recommended for SMTP)
/*
   PRO TIP: 
   Download PHPMailer (https://github.com/PHPMailer/PHPMailer) 
   and place its contents in a folder named 'PHPMailer' inside your 'php' directory.
*/

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$phpmailer_path = 'PHPMailer/src/PHPMailer.php';
$smtp_path = 'PHPMailer/src/SMTP.php';
$exception_path = 'PHPMailer/src/Exception.php';

if (file_exists($phpmailer_path)) {
    require $exception_path;
    require $phpmailer_path;
    require $smtp_path;

    $mail = new PHPMailer(true);

    try {
        // Server settings from our Config CRUD
        $mail->isSMTP();
        $mail->Host = $smtp['host'];
        $mail->SMTPAuth = true;
        $mail->Username = $smtp['username'];
        $mail->Password = $smtp['password'];
        $mail->SMTPSecure = $smtp['encryption'] === 'tls' ? PHPMailer::ENCRYPTION_STARTTLS : ($smtp['encryption'] === 'ssl' ? PHPMailer::ENCRYPTION_SMTPS : '');
        $mail->Port = intval($smtp['port']);

        // Recipients
        $mail->setFrom($smtp['from_email'], $smtp['from_name']);
        $mail->addAddress('savansoftware8@gmail.com', 'Lyrovix Admin');

        // Content
        $mail->isHTML(true);
        $mail->Subject = "New Lead Received – $name (Lyrovix Website)";
        $mail->Body = $template;

        $mail->send();
        echo json_encode(["status" => "success", "message" => "SMTP Email sent successfully to savansoftware8@gmail.com"]);
    } catch (Exception $e) {
        echo json_encode(["status" => "error", "message" => "SMTP Error: {$mail->ErrorInfo}"]);
    }
} else {
    // Fallback if PHPMailer is not installed
    $to = 'savansoftware8@gmail.com';
    $subject = "New Lead Received – $name (Lyrovix Website)";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: " . $smtp['from_name'] . " <" . $smtp['from_email'] . ">" . "\r\n";

    if (mail($to, $subject, $template, $headers)) {
        echo json_encode(["status" => "success", "message" => "Email sent (System fallback) to savansoftware8@gmail.com. Tip: For better SMTP support, add PHPMailer folder."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send. Please add the PHPMailer folder into the php directory for actual SMTP."]);
    }
}
?>