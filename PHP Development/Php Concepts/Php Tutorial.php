<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Tutorial</title>
</head>
<body>
  <?php 
  /*
  //Variables
  $my_first_variable = "learning from Simplilearn";
  $my_first_number_variable = 5;
  $my_first_float_variable =7.5;

  //Variable Output
  echo "<h1>" . $my_first_variable ."<h1>";
  echo "<h2>" . $my_first_number_variable ."<h2>";
  echo "<h3>" . $my_first_float_variable ."<h3>";
  */
  
  //Arrays
  //Method 1
  $laptop_brand = array("HP","Lenovo","Asus","Dell");
  
  //Array Output
  echo var_dump($laptop_brand);
  echo var_dump($laptop_brand[2]);
  

 //Method 2
  define("Tech_Giants", ["Apple","Microsoft","Google","Amazon"]);
  echo Tech_Giants[3];

  ?>
</body>
</html>