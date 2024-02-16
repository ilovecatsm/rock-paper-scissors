const choices = ["Rock", "Paper", "Scissors"];
const playerSelection = userInput();
const computerSelection = getComputerChoice();
// gets player input and checks it
function userInput() {
  let playerInput = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
  if (playerInput === "rock") {
    return "Rock";
  } else if (playerInput === "paper") {
    return "Paper";
  } else if (playerInput === "scissors") {
    return "Scissors";
  } else "Please only type Rock, Paper, or Scissors!";
  return playerInput;
}
function checkPlayerChoice(playerChoice) {
  if (playerChoice === "rock") {
    return "You selected Rock";
  } else if (playerChoice === "paper") {
    return "You selected Paper";
  } else return "You selected Scissors";
}
// computer choices
function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * choices.length);
  if (computerChoice === 1) {
    return "Rock";
  } else if (computerChoice === 2) {
    return "Paper";
  } else return "Scissors";
}
function checkComputerChoice(computerChoice) {
  if (computerChoice === 1) {
    return "The computer selected Rock";
  } else if (computerChoice === 2) {
    return "The computer selected Paper";
  } else return "The computer selected Scissors";
}
// checks who wins the game
function checkWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Tie";
  } else if (
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Rock" && computerChoice === "Scissors")
  )
    return "Player";
  else {
    return "Computer";
  }
}
// initializes the game
function playRound(playerSelection, computerSelection) {
  // console.log(userInput());
  // console.log(getComputerChoice());

  const winner = checkWinner(playerSelection, computerSelection);
  if (winner == "Tie") {
    return "It's a tie!";
  } else if (winner == "Player") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}
console.log(checkPlayerChoice());
console.log(checkComputerChoice());
console.log(playRound(playerSelection, computerSelection));
