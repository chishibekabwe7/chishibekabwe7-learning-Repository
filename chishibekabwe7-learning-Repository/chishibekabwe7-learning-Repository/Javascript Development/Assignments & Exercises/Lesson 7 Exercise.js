//Part 1
function greet(name = 'Chishibe Kabwe' ){ //Parameters
    console.log(`Hello ${name}`);
}
greet('CJ');    //Arguments
greet('BMG');  //Arguments
greet('JR');  //Arguments
greet();
 
//Part 2
//(a)
function convertToFahrenheit(celsius){
    Fahrenheit = (celsius * 9/5)+ 32
    console.log(Fahrenheit)
}
convertToFahrenheit(25);

//(b)
function convertToCelsius(fahrenheit){
    Celsius = (fahrenheit - 32)* 5/9;
    console.log(Celsius);
}
convertToCelsius(86);

