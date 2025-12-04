<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Error reporting (for development)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Only POST allowed
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Only POST method allowed']);
    exit;
}

// Receive form data
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

$errors = [];

// Validation
if (empty($name)) $errors[] = 'Name is required';
if (empty($email)) $errors[] = 'Email is required';
elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Invalid email address';
if (empty($message)) $errors[] = 'Message is required';

// Return errors
if (!empty($errors)) {
    echo json_encode(['success' => false, 'message' => implode(', ', $errors)]);
    exit;
}

// Escape inputs
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Email setup
$to = 'muhammedmame09@gmail.com';
$subject = 'New Portfolio Contact Message';

// HTML email template
$email_content = "
<!DOCTYPE html>
<html>
<head>
<meta charset='UTF-8'>
<style>
body { font-family: Arial; background: #f5f5f5; padding: 20px; }
.container { max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 10px; }
.header { background: linear-gradient(135deg, #0ea5e9, #0f172a); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center; }
.label { font-weight: bold; margin-top: 15px; color: #0f172a; }
.value { background: #e2e8f0; padding: 10px; border-left: 4px solid #0ea5e9; margin-top: 5px; border-radius: 5px; }
</style>
</head>
<body>

<div class='container'>
    <div class='header'>
        <h2>New Portfolio Contact Message</h2>
    </div>

    <div class='field'>
        <div class='label'>Name</div>
        <div class='value'>{$name}</div>
    </div>

    <div class='field'>
        <div class='label'>Email</div>
        <div class='value'>{$email}</div>
    </div>

    <div class='field'>
        <div class='label'>Message</div>
        <div class='value'>" . nl2br($message) . "</div>
    </div>

    <div class='field'>
        <div class='label'>Sent At</div>
        <div class='value'>" . date('d.m.Y H:i:s') . "</div>
    </div>
</div>

</body>
</html>
";

// Headers
$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: '.$email,
    'Reply-To: '.$email,
];

// Send email
$mail_sent = mail($to, $subject, $email_content, implode("\r\n", $headers));

// Response
if ($mail_sent) {
    echo json_encode(['success' => true, 'message' => 'Your message has been sent']);
} else {
    echo json_encode(['success' => false, 'message' => 'Email sending failed']);
}
?>
