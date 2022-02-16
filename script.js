const choices = ["rock", "paper", "scissors"];
let roundCounter = 0;
let playerScore = 0;
let comScore = 0;
let playerSelection;

function playerPlay(){
  playerSelection = prompt("Please input your choice: rock, paper, scissors").toLowerCase();
  while (!(choices.includes(playerSelection))){
    playerSelection = prompt("Error! Please input your choice: rock, paper, scissors").toLowerCase();
  }
}

function computerPlay(){
  return choices[Math.floor(Math.random()*choices.length)];
}

//Compares the selection and returns a string

function playRound(player, com){
  let p = player.toLowerCase();
  
  if (p === "rock" && com === "paper"){
    return "playerLost";
  } else if (p === "rock" && com === "scissors"){
    return "playerWin";
  } else if (p === "paper" && com === "scissors") {
    return "playerLost";
  } else if (p === "paper" && com === "rock"){
    return "playerWin";
  } else if (p === "scissors" && com === "rock"){
    return "playerLost";
  } else if (p === "scissors" && com === "paper"){
    return "playerWin"
  } else {
    return "tie";
  }

}

function game(){
  roundCounter++;
  let computerSelection = computerPlay();
  if (playRound(playerSelection, computerSelection) === "playerWin"){
    playerScore++;
    console.log(`You win! Computer has chosen ${computerSelection} and player has chosen ${playerSelection}.`);
    alert(`You win! Computer has chosen ${computerSelection} and player has chosen ${playerSelection}.`);
  } else if (playRound(playerSelection, computerSelection) === "playerLost"){
    console.log(`You lost! Computer has chosen ${computerSelection} and player has chosen ${playerSelection}.`);
    alert(`You lost! Computer has chosen ${computerSelection} and player has chosen ${playerSelection}.`);
    comScore++;
  } else {
    console.log(`Tie! Computer has chosen ${computerSelection} and player has chosen ${playerSelection}.`);
    alert(`Tie! Computer has chosen ${computerSelection} and player has chosen ${playerSelection}.`);
  }
  console.log(`Round: ${roundCounter}\nYour score: ${playerScore}\nComputer score: ${comScore}\n\n`);
  alert(`Round: ${roundCounter}\nYour score: ${playerScore}\nComputer score: ${comScore}\n\n`);
}

for (i = 0; i <5; i++){
  playerPlay();
  game();
}