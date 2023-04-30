// Initialize player and computer scores to 0
let playerScore = 0;
let computerScore = 0;

// Select all input elements on the page
const buttons = document.querySelectorAll('input');

// Add a click event listener to each input element
buttons.forEach(button => {
  button.addEventListener('click', function () {
    // Get computer's choice and player's choice
    const computerSelection = computerChoice();
    const playerSelection = button.getAttribute('data-choice');
    
    // Play a round with the selected choices
    round(playerSelection, computerSelection);
  });
});

// Function to randomly choose the computer's selection
function computerChoice() {
    let getRandomValue = (Math.floor(Math.random() * 3));
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

// Helper function to display the current score
function evaluateScore() {
    return playerScore + " - " + computerScore;
}

// Function to play a round of Rock, Paper, Scissors
function round(playerSelection, computerSelection) {
  let roundResult = "";
  
  // Determine the outcome of the round and update the scores
  if (playerSelection === computerSelection) {
    updateScoreDisplay();
    roundResult = "The computer chose " + computerSelection + ", It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")) {
      playerScore++;
      updateScoreDisplay();
      roundResult = "The computer chose " + computerSelection + ", You win!";
  } else {
    computerScore++;
    updateScoreDisplay(); 
    roundResult = "The computer chose " + computerSelection + ", The computer wins!";
  }

  // Check if either player has reached a score of 5 and prompt to play again
  if (playerScore === 5 || computerScore === 5) {
    const playAgain = confirm(roundResult + "\nGame over! Do you want to play again?");
    if (playAgain) {
      resetGame();
    }
  } else {
    updateRound(roundResult);
  }
  
  return roundResult;
}

// Function to update the round result text
function updateRound(result) {
  const roundResultElement = document.getElementById("round-result");
  roundResultElement.textContent = result;
}

// Function to update the score display
function updateScoreDisplay() {
  const scoreTallyElement = document.getElementById("score-tally");
  scoreTallyElement.textContent = "👨‍💻 " + playerScore + " - " + computerScore + " 💻";
}

// Function to reset the game when either player reaches a score of 5
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScoreDisplay();
  updateRound('Game reset! Play again!');
}