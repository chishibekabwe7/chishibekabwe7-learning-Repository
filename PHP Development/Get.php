<?php
   if(isset($_GET["name"]) || isset($_GET["age"])){
    echo "Hi". $_GET['name']. "<br/>";
    echo "Your age is". $_GET['age']."years";
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php GET</title>
</head>
<body>
    <form action = "<?php $_PHP_SELF ?>" method = "GET">
        name: <input type="text" name="name" />
       Age: <input type="text" name="age" />
       <input type="submit"/>
    </form>
  </body>
</html>
