                                    <html>
<head>
<script>
window.location.replace("../cumic-book-fest");
</script>
</head>
<body>    

                                   
        
                    <?php
	
$email_address = $_POST['email'];
$redirect = "http://cslog.rs/makart";
// Create the email and send the message
$to = 'makart@makart.rs'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Landing:  $email_address";
$email_body = $email_address;
$headers = "makart@makart.rs\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
	

header('Location:  '. $redirect);  


?>





</body>
</html>                            
                            
