<?php

$to='studio@zandism.com';
$subject=$_POST['userSubject'];


$firstName=$_POST['userName'];
$email=$_POST['userEmail'];
$comment=$_POST['userMessage'];

$message=<<<EMAIL

Name: $firstName
Email: $email
Message: $comment



EMAIL;

mail($to, $subject, $message, "From:".$email);

$message_sent="Your message has been sent";

?>