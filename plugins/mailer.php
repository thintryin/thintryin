<?php

//get data from form  

$name = $_POST['name'];

$email= $_POST['email'];

$message= $_POST['content'];

$to = "mrsajadpp@gmail.com";

$subject = "Mail From website";

$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;

$headers = "From: noreply@thintry.com" . "\r\n" .

"CC: somebodyelse@example.com";

if($email!=NULL){

    mail($to,$subject,$txt,$headers);

}

//redirect

header("Location:thankyou.html");

?>
