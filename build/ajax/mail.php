<?php

$recepient = "oparavitalii@gmail.com";
$sitename = "Агенство по трудоустройству";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$textarea = trim($_POST["textarea"]);
$mail = trim($_POST["mail"]);
$select =trim($_POST["select"]);
$message = "Имя: $name \nТелефон: $phone \nПочта: $mail \nСообщение: $textarea  \n \nУслуга: $select  \n  ";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>