function computerChoice(){
    let computerChoice = Math.floor(Math.random() * 3)
    switch (computerChoice){
     case 0:
        return "Rock";
     case computerChoice = 1:
        return "Paper";
     case computerChoice = 2:
        return "Scissors";
    }
}

console.log(computerChoice())

//function userChoice(){
   let userChoice = prompt("Type Llama, Honey Badger, or Velociraptor (spelling is important, but capitalization is not):");
   userChoice = toLowerCase(userChoice);
   return userChoice;
}

console.log(userChoice())

function gameRound(){

}
//