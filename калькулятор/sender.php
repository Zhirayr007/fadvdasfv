<?php
$many = $_POST['many'];
$many_result = $_POST['many_result'];
$email = $_POST['email'];
//$text = $_POST['text'];

$to = "jirayr.dabaxyn@mail.ru";
$date = date("d.m.Y");
$time = date("h:i");
$from = $email;
$subject = "Заявка с сайта";


$msg = "
	Имя: $many /n
	Телефон: $many_result /n
	Почта: $email ";

mail($to, $subject, $msg, "From: $from ");
