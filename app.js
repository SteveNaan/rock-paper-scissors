
document.getElementsByClassName("button").addEventListener("click", userChoice);

function userChoice(choice) {
   console.log(`User chose ${choice}`);
   alert(`User chose ${choice}`)
   return choice;
 }


/*
function userChoice(){
   let userChoice = prompt("Type Llama, Honey Badger, Velociraptor or Duck (spelling is important, but capitalization is not):");
   userChoice = userChoice.toLowerCase();
   return userChoice;
} */

let playerSelection = userChoice();

alert(userChoice())

console.log(userChoice())

function computerChoice(){
   let computerChoice = Math.floor(Math.random() * 5)
   switch (computerChoice){
    case 0:
       return "llama";
    case 1:
       return "honey Badger";
    case 2:
       return "velociraptor";
    case 3: 
       return "duck"
   }
}

console.log(computerChoice())

function gameRound(userChoice, computerChoice) {
   if (userChoice === computerChoice) {
     return "It's a tie!";
   } else if (
     (userChoice === ("llama") && computerChoice === "honey Badger") ||
     (userChoice === "honey Badger" && computerChoice === "velociraptor") ||
     (userChoice === "velociraptor" && computerChoice === "duck") ||
     (userChoice === "duck" && computerChoice === "llama")
   ) {
     return "You win!";
   } else {
     return "The computer wins!";
   }
 }

console.log(gameRound(userChoice(), computerChoice()));
alert(gameRound(userChoice(), computerChoice()));

let playerScore = 0;
let computerScore = 0;
