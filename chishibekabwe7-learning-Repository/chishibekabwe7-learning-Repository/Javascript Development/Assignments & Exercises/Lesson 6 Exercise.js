//Exercise 6
//First Part 
hour = 3;
Name = 'Chishibe';
if(hour < 12 ){
    console.log(`Good Morning! ${Name}`);
}
else if(hour <= 18){
    console.log(`Good Afternoon! ${Name}`);
}
else{
    console.log(`Good Night! ${Name}`);
}

//Second Part
isHoliday = false;
age = 19;
if(age <= 6 && age >= 65 && (isHoliday)){
    console.log("Discount");
}
else{
    console.log("No discount");
}

//Part C
//Coin flip Game
 let gameData = Math.random();

 let result = ''
if(gameData <= 0.5){
    result = 'Heads';
}
else{
    result = ('Tails');
}

const guess = 'Heads'
if(result === guess){
    console.log('You win');
}
else{
    console.log('You lose');
}


/*=====================================================[ Authored by chishibekabwe7@github.com ]=========================================*/