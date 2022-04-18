const choices = ["rock", "paper", "scissors"];
/*let roundCounter = 0;*/
let playerScore = 0;
let comScore = 0;
let playerSelection;
let computerSelection;
let victoryText;
let result;

const resultText = document.createElement('span');
const pSelectionText = document.createElement('span');
const cSelectionText = document.createElement('span');
const pScore = document.createElement('span');
const cScore = document.createElement('span');
const vText = document.createElement('span');
const BtnNewGame = document.createElement('button');

const resultQuery = document.querySelector('#results');
const playerChoiceQuery = document.querySelector('#playerChoice');
const comChoiceQuery = document.querySelector('#comChoice');
const pScoreQuery = document.querySelector('#pScore');
const cScoreQuery = document.querySelector('#cScore');
const vTextQuery = document.querySelector('#vText');

BtnNewGame.style.display = "block";
BtnNewGame.textContent = "New Game";
BtnNewGame.addEventListener("click", () => {
    window.location.reload();
})

const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', () => {
    playerSelection = "rock";
    
    playRound(playerSelection);
    if (result === "You have won this round!") {
        playerScore += 1;
    }
    if (result === "You have lost this round.") {
        comScore += 1;
    }
    if (result === "Tied.") {
        console.log(result);
    }
    changePlayerText();
    changeComText();
    changeResultText()
    checkVictory();
})

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', () => {
    playerSelection = "paper";
   
    playRound(playerSelection);
    if (result === "You have won this round!") {
        playerScore += 1;
    }
    if (result === "You have lost this round.") {
        comScore += 1;
    }
    if (result === "Tied.") {
        console.log(result);
    }
    changePlayerText();
    changeComText();
    changeResultText()
    checkVictory();
})

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', () => {
    playerSelection = "scissors";

    playRound(playerSelection);
    if (result === "You have won this round!") {
        playerScore += 1;
    }
    if (result === "You have lost this round.") {
        comScore += 1;
    }
    if (result === "Tied.") {
        console.log(result);
    }
    changePlayerText();
    changeComText();
    changeResultText()
    checkVictory();
})

function changePlayerText() {
    console.log(playerSelection + ' selected.');
    pSelectionText.textContent = playerSelection;
    playerChoiceQuery.appendChild(pSelectionText);

    console.log("Player score: " + playerScore);
    pScore.textContent = playerScore;
    pScoreQuery.appendChild(pScore);
}

function changeComText() {
    cSelectionText.textContent = computerSelection;
    comChoiceQuery.appendChild(cSelectionText);

    console.log("Computer score: " + comScore);
    cScore.textContent = comScore;
    cScoreQuery.appendChild(cScore);
}

function changeResultText() {
    resultText.textContent = result;
    resultQuery.appendChild(resultText);
}

function computerPlay(){
  return choices[Math.floor(Math.random()*choices.length)];
}

//Compares the selection and returns a string

function playRound(p) {
  computerSelection = computerPlay();
  if (p === "rock" && computerSelection === "paper"){
    result = "You have lost this round.";
  } else if (p === "rock" && computerSelection === "scissors"){
    result = "You have won this round!";
  } else if (p === "paper" && computerSelection === "scissors") {
    result = "You have lost this round.";
  } else if (p === "paper" && computerSelection === "rock"){
    result = "You have won this round!";
  } else if (p === "scissors" && computerSelection === "rock"){
    result = "You have lost this round.";
  } else if (p === "scissors" && computerSelection === "paper"){
    result = "You have won this round!"
  } else {
    result = "Tied.";
  }
}

function checkVictory() {
    if (playerScore === 5) {
        playerScore = 0;
        comScore = 0;
        victoryText = "Player wins!";
        vText.textContent = victoryText;
        vTextQuery.appendChild(vText);
        vTextQuery.appendChild(BtnNewGame);
    }
    if (comScore === 5) {
        playerScore = 0;
        comScore = 0;
        victoryText = "Computer wins!";
        vText.textContent = victoryText;
        vTextQuery.appendChild(vText);
        vTextQuery.appendChild(BtnNewGame);
    }
}
