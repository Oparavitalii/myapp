<?php

$recepient = "oparavitalii@gmail.com";
$sitename = "Агенство";
$phone = trim($_POST["phone1"]);
$message ="номер: $phone \n";
$pagetittle = "Номер из сайта $sitename";

mail ($recepient,$pagetittle,$message,"Content-type:text/plain; charset=\"utf-8\"\n From:$recepient");

?>