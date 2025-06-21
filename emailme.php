<?php
// Set proper headers for API responses
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method Not Allowed'
    ]);
    exit();
}

// Email configuration
$smtp_host = 'smtp.gmail.com';
$smtp_port = 587;
$smtp_username = 'maptech07@gmail.com';
$smtp_password = 'bycflcsatrfhvvjo';
$from_email = 'support@maptechnepal.com';
$to_email = 'info@maptechnepal.com';

// Get request data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// If JSON decode fails, try to get form data
if (!$data) {
    $data = $_POST;
}

// Determine endpoint based on URL path
$request_uri = $_SERVER['REQUEST_URI'];
$is_demo_request = strpos($request_uri, 'demo') !== false;

try {
    if ($is_demo_request) {
        handleDemoRequest($data);
    } else {
        handleContactRequest($data);
    }
} catch (Exception $e) {
    error_log('Email Error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send email',
        'error' => $e->getMessage()
    ]);
}

function validateContactForm($data) {
    $errors = [];
    
    if (empty($data['fullName']) || strlen(trim($data['fullName'])) < 2) {
        $errors[] = 'Invalid or missing full name';
    }
    
    if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email address';
    }
    
    if (empty($data['message']) || strlen(trim($data['message'])) < 5) {
        $errors[] = 'Message is too short';
    }
    
    return $errors;
}

function validateDemoForm($data) {
    $errors = [];
    
    if (empty($data['name']) || strlen(trim($data['name'])) < 2) {
        $errors[] = 'Invalid or missing name';
    }
    
    if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email address';
    }
    
    if (empty($data['phone'])) {
        $errors[] = 'Phone number is required';
    }
    
    if (empty($data['product'])) {
        $errors[] = 'Product selection is required';
    }
    
    if (empty($data['message']) || strlen(trim($data['message'])) < 5) {
        $errors[] = 'Message is too short';
    }
    
    return $errors;
}

function handleContactRequest($data) {
    global $smtp_host, $smtp_port, $smtp_username, $smtp_password, $from_email, $to_email;
    
    // Validate form data
    $errors = validateContactForm($data);
    if (!empty($errors)) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Validation failed',
            'errors' => $errors
        ]);
        return;
    }
    
    $fullName = htmlspecialchars($data['fullName']);
    $email = htmlspecialchars($data['email']);
    $phone = isset($data['phone']) ? htmlspecialchars($data['phone']) : 'Not provided';
    $subject = isset($data['subject']) ? htmlspecialchars($data['subject']) : '';
    $message = htmlspecialchars($data['message']);
    
    // Email content
    $email_subject = 'New Contact Form Submission';
    $email_body = "
Contact Form Details:
Name: $fullName
Email: $email
Phone: $phone

Message:
$message
    ";
    
    $html_body = "
<html>
<body>
    <h2>Contact Form Submission</h2>
    <p><strong>Name:</strong> $fullName</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Phone:</strong> $phone</p>
    <h3>Subject:</h3>
    <p>$subject</p>
    <h3>Message:</h3>
    <p>$message</p>
</body>
</html>
    ";
    
    if (sendEmail($to_email, $email_subject, $email_body, $html_body, $email)) {
        echo json_encode([
            'success' => true,
            'message' => 'Message sent successfully!'
        ]);
    }
}

function handleDemoRequest($data) {
    global $smtp_host, $smtp_port, $smtp_username, $smtp_password, $from_email, $to_email;
    
    // Validate form data
    $errors = validateDemoForm($data);
    if (!empty($errors)) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Validation failed',
            'errors' => $errors
        ]);
        return;
    }
    
    $name = htmlspecialchars($data['name']);
    $email = htmlspecialchars($data['email']);
    $phone = htmlspecialchars($data['phone']);
    $company = isset($data['company']) ? htmlspecialchars($data['company']) : 'Not provided';
    $companyContact = isset($data['companyContact']) ? htmlspecialchars($data['companyContact']) : 'Not provided';
    $companyAddress = isset($data['companyAddress']) ? htmlspecialchars($data['companyAddress']) : 'Not provided';
    $product = htmlspecialchars($data['product']);
    $subject = isset($data['subject']) && !empty(trim($data['subject'])) ? htmlspecialchars($data['subject']) : "Demo Request for $product";
    $message = htmlspecialchars($data['message']);
    
    // Email content
    $email_body = "
Demo Request Details:
Name: $name
Email: $email
Phone: $phone

Company: $company
Company Contact: $companyContact
Company Address: $companyAddress
Product: $product

Message:
$message
    ";
    
    $html_body = "
<html>
<body>
    <h2>Demo Request Submission</h2>
    <p><strong>Name:</strong> $name</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Phone:</strong> $phone</p>
    <h3>Company Information</h3>
    <p><strong>Company:</strong> $company</p>
    <p><strong>Company Contact:</strong> $companyContact</p>
    <p><strong>Company Address:</strong> $companyAddress</p>
    <h3>Product</h3>
    <p>$product</p>
    <h3>Subject</h3>
    <p>$subject</p>
    <h3>Message</h3>
    <p>$message</p>
</body>
</html>
    ";
    
    if (sendEmail($to_email, $subject, $email_body, $html_body, $email)) {
        echo json_encode([
            'success' => true,
            'message' => 'Demo request submitted successfully!'
        ]);
    }
}

function sendEmail($to, $subject, $body, $html_body, $reply_to) {
    global $smtp_host, $smtp_port, $smtp_username, $smtp_password, $from_email;
    
    // Use PHPMailer if available, otherwise use mail() function
    if (class_exists('PHPMailer\PHPMailer\PHPMailer')) {
        return sendWithPHPMailer($to, $subject, $body, $html_body, $reply_to);
    } else {
        return sendWithMailFunction($to, $subject, $body, $html_body, $reply_to);
    }
}

function sendWithPHPMailer($to, $subject, $body, $html_body, $reply_to) {
    global $smtp_host, $smtp_port, $smtp_username, $smtp_password, $from_email;
    
    require_once 'vendor/autoload.php'; // Adjust path as needed
    
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    
    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = $smtp_host;
        $mail->SMTPAuth = true;
        $mail->Username = $smtp_username;
        $mail->Password = $smtp_password;
        $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = $smtp_port;
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );
        
        // Recipients
        $mail->setFrom($from_email, 'MapTech Nepal Support');
        $mail->addAddress($to);
        $mail->addReplyTo($reply_to);
        
        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $html_body;
        $mail->AltBody = $body;
        
        $mail->send();
        return true;
    } catch (Exception $e) {
        throw new Exception("PHPMailer Error: {$mail->ErrorInfo}");
    }
}

function sendWithMailFunction($to, $subject, $body, $html_body, $reply_to) {
    global $from_email;
    
    // Email headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: $from_email" . "\r\n";
    $headers .= "Reply-To: $reply_to" . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Send email
    if (mail($to, $subject, $html_body, $headers)) {
        return true;
    } else {
        throw new Exception("Failed to send email using mail() function");
    }
}
?>