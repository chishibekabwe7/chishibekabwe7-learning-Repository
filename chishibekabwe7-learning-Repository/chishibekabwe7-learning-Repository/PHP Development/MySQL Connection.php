<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MySQL Connection</title>
</head>
<body bgcolor="FBB917">

<h1>Blood Donation Camp</h1>
<div>
    <h2>Registration Form</h2>
</div>
<form action="MySQL connecter.php" method="POST">

<label for="user">Name:</label><br>
<input type="text" name="name" id="name"required><br><br>

<label for="email">Email:</label><br>
<input type="email" name="email" id="email"required><br><br>

<label for="phone">Phone:</label><br>
<input type="text" name="phone" id="phone"required><br><br>

<label for="bgroup">Blood Group:</label><br>
<input type="text" name="bgroup" id="bgroup"required><br><br>

<input type="submit" name="submit" id="submit">
</form>
    
</body>
</html>