 
<html>
<head>
 
 
</head>

<body>

<?php
$to="samuelkennetrajkumar@gmail.com";
$subject="From Samuel Rajkumar Website ";
$email=$_REQUEST['email'];
$message=$_REQUEST['message'];
$headers="From:$email";
$sent=mail($to,$subject,$message,$headers);
if($sent)
{print('<a href="thankyou.html">Thank you, email sent</a>');}
else
{print"we encountered an error";}
?>

</body>
</html>
