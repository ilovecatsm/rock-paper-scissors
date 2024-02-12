// Create the variables for the rock, paper, scissors done
// make the function (this function will be for letting the computer pick what it wants) done
// let the user choose what they want to pick
// the computer randomly chooses what it'll pick based of the variables from earlier
// win or lose scenario output

let choices = ["Rock", "Paper", "Scissors"];

// gets player input
function userInput() {
  let userAnswer = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
  if (userAnswer === "rock") {
    return "You chose Rock.";
  } else if (userAnswer === "paper") {
    return "You chose Paper.";
  } else if (userAnswer === "scissors") {
    return "You chose Scissors";
  } else return "Please input Rock, Paper, or Scissors only!";
}
// computer choices
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * choices.length);
  if (computerChoice === 1) {
    return "The computer chose Rock.";
  } else if (computerChoice === 2) {
    return "The computer chose Paper.";
  } else return "The computer chose Scissors.";
}

// this sect will be for the game rounds
// i want to have the user prompt show first, then show the computer's answer
// after that i want to have some sort of if statement
// if both statements are equal then its a tie
// rock wins over scissors
// paper wins over rock
// scissors win over paper
function singleRound(playerSelection, computerSelection) {
  console.log(userInput());
  console.log(getComputerChoice());
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection > computerSelection) {
    return "You win!";
  } else return "You lose!";
}
const playerSelection = userInput;
const computerSelection = getComputerChoice();
console.log(singleRound());

// function gameRound() {
//   console.log(userInput());
//   console.log(getComputerChoice());
// }
// gameRound();
