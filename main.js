let playerScore = 0;
let computerScore = 0;

// getComputerChoice via random number 
function computerChoice() {
    let getRandomValue = (Math.floor(Math.random() * 3))
    if (getRandomValue === 0) {
        return "rock";
    }
    else if (getRandomValue === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

console.log(computerChoice())
// First round of rock paper scissors - take playerSelection + computerSelection and compare
// Make case insensitive 
// Return and alert result

function evaluateScore() {
    return playerScore + " - " + computerScore;
}

function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie! The score is " + evaluateScore();
      } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ) {
            playerScore++;
            alert("You win! The score is " + evaluateScore());
            return "You win! The score is " + evaluateScore();
           
        } 
        else {
            computerScore++;
            return "The computer wins! The score is " + evaluateScore();
        }
}


// function playerChoice() {
//     let playerSelection = prompt("Type Rock, Paper, or Scissors (spelling is important, but capitalization is not):");
//     playerSelection = playerSelection.toLowerCase();
//     return playerSelection;
//  }

//Function game(), using previous function inside to play 5 rounds and announce keep score
// Alert winner or loser at the end
function game() {
    for (let i = 0; i < 5; i++) {
      let playerSelection = playerChoice();
      let computerSelection = computerChoice();
      console.log("Player chose: " + playerSelection);
      console.log("Computer chose: " + computerSelection);
      console.log(round(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
      alert("You win the game with a score of " + playerScore + " - " + computerScore);
    } else if (playerScore < computerScore) {
      alert("The computer wins the game with a score of " + computerScore + " - " + playerScore);
    } else {
      alert("It's a tie game with a score of " + playerScore + " - " + computerScore);
    }
  }

//play game 
 game()