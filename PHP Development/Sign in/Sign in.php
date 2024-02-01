<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign in with MySQL and Php</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
</head>
<body>
    <?php 
     $host = 'localhost';
     $database = 'mysampledatabase';
     $username = 'cj';
     $password = '335598';
   
     //Create a connection
     $conn = new mysqli($host,$database,$username,$password);
   
     //Check connection
     if($conn->connect_error){
       die("Connection failed");
     }
     else{
       echo "Connected successfully";
     }
   
    //Name Validation
if(empty($_POST["name"])){
    die("Name is required");
}

//Email Validation 
 if( ! filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)){
    die("Email is Invalid");
 }

//Password Validation (Should contain 8 characters)
if(strlen($_POST["password"]) < 8){
    die("Password must contain atleast 8 characters");
};

 /*
//Password Validation (Should contain a letter)
if(! preg_match("/[a-z]/i]",$_POST["password"])){
    die("Password must contain atleast one letter");
}
if(! preg_match("/[0-9]/]",$_POST["password"])){
    die("Password must contain atleast one letter");
}
*/

//validating password (both passwords should equal)
if ($_POST["password"] !== $_POST["password_confirmation"]){
    die("Passwords Do not match");
}

//Encripting the password
$password_hash = password_hash($_POST["password"],PASSWORD_DEFAULT);
print_r($_POST);
var_dump($password_hash);
    ?>
  <h1>Sign up</h1>  
  <form action="<?php $_PHP_SELF?>" method="post" novalidate>
    <div>
        <label for="name">Name</label><br>
        <input type="text" id="name" name="name">
    </div>

    <div>
        <label for="email">Email</label><br>
        <input type="email" id="email" name="email">
    </div>

    <div>
        <label for="password">Password</label><br>
        <input type="password" id="password" name="password">
    </div>

    <div>
        <label for="password_confirmation">Repeat password</label><br>
        <input type="password" id="password_confirmation" name="password_confirmation">
    </div><br>

    <input type="submit" value="Sign in" name="form">
  
  </form>
</body>
</html>