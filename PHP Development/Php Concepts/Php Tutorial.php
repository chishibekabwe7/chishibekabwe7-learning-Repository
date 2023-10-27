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
  
  //Arrays
  //Method 1
  $laptop_brand = array("HP","Lenovo","Asus","Dell");
  
  //Array Output
  echo var_dump($laptop_brand);
  echo var_dump($laptop_brand[2]);
  

 //Method 2
 define("Tech_Giants", ["Apple","Microsoft","Google","Amazon"]);
 echo Tech_Giants[3];
 
 //If,else Statements
 //Condition 1
 $var = 8;
 if($var > 7){
     echo $var;
    }
    else{
        echo "The number is not greater than 7";
    }
 //Condition 2
 $var = 6;
 if ($var % 2 && $var % 3 ==0){
    echo "Divisible by both";
 }
 elseif ($var % 3 == 0){
    echo "Divisible by 3";
}
else {
    echo "Not divisible by either 2 or 3";
}


//Switch Statements
$level = 5;
switch($level){
     case 1:
        echo "You are playing at EASY level";
     break;   

     case 2:
        echo "You are playing at MODERATE level";
     break;   

     case 3:
        echo "You are playing at HARD level";
     break;   

     case 4:
        echo "You are playing at EXTREME level";
        break;   
        default:
        echo "Invalid Input";
    }
    */
    
    //Loops
    //while loop
    $var_1 = 1;
    while($var_1 <= 10){
        echo "Number: $var_1<br>";
        $var_1++;
    }
    
    //Do or while loop
    $var_2 = 11;
    do {
        echo "Number: $var_2 <br>";
        $var_2++;
    }
    while($var_2 <= 10);

   //For loop 
   for ($var_3 = 1; $var_3 <= 6; $var_3++){
    echo "Number: $var_3 <br>";
   };
  ?>
</body>
</html>