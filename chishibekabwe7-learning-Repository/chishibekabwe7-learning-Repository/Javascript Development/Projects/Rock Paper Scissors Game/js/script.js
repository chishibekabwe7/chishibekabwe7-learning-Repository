function playGame(playerMove) {

    //Calling Computer move function
    pickComputerMove();

    //Adding the return value to computer move variable in the main scope
    const computerMove = pickComputerMove();

    //Storing the result in a variable
    let result = '';

    if(playerMove === 'scissors'){
        if(computerMove === 'Rock'){
            result = 'You lose.';
        }
        else if(computerMove === 'Paper'){
            result = 'You win.';
        }
        else if(computerMove === 'Scissors'){
            result = 'Tie.';
        }
    }
    else if (playerMove === 'paper'){
        if(computerMove === 'Rock'){
            result = 'You win.';
        }
        else if(computerMove === 'Paper'){
            result = 'Tie.';
        }
        else if(computerMove === 'Scissors'){
            result = 'You lose.';
        }
    }
    else if(playerMove === 'rock'){
    
        if(computerMove === 'Rock'){
            result = 'Tie.';
        }
        else if(computerMove === 'Paper'){
            result = 'You lose.';
        }
        else if(computerMove === 'Scissors'){
            result = 'You win.';
        }
    }


      //Pop up Logic
      alert(`You picked ${playerMove}, The Computer picked ${computerMove}, ${result}.`);
    }

        //Declaring a computer move function
        function pickComputerMove() {

    //Declaring the Variable Storing the random number
    const randomNumber = Math.random()

    //Declaring the for storing the Computer Move
    let computerMove = '';

    //Rock
    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = ('Rock');
    }

    //Paper Logic
    else if(randomNumber >= 2/3 && randomNumber < 1){
            computerMove = ('Paper');
    }

    //Scissors Logic
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = ('Scissors');
    }
    //Return Value(Getting the computer move variable out of the function)
    return computerMove;
        }