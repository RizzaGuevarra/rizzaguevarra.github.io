<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);
    
    $to = "rizza.guevarra@gmail.com";
    $subject = "New Resume Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    $headers = "From: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Error sending message.";
    }
}
?>
