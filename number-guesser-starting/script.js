let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;



function generateTarget(){
   return Math.floor(Math.random() * 10);
}


// take guesses and compare to see who was closest
function compareGuesses(humanGuess, computerGuess, targetGuess){
    const humanDiff = Math.abs(targetGuess - humanGuess);
    const computerDiff = Math.abs(targetGuess - computerGuess)


    // if human wins return true
    if(humanDiff <= computerDiff){
        return true;
    }else{
        return false;
    }
}

// increase score by one depending on winner
const updateScore = winner => {
if(winner === 'human'){
    humanScore++
} else if(winner === 'computer'){
    computerScore++
    }
}


// increase round by 1 after win
const advanceRound = () =>
currentRoundNumber++;