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
userInput();
// get player input via a prompt DONE
// just realized ive been trying to set the user's input to show as caps but
// i really need to make it so that it will allow their answer even if its mixed cases
// console.log it out

// computer choices
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * choices.length);
  if (computerChoice === 1) {
    return "The computer chose Rock.";
  } else if (computerChoice === 2) {
    return "The computer chose Paper";
  } else return "The computer chose Scissors";
}
// for the random selection, I could try to make an if statement?
// if the computer picks 1, then choose rock
// else if the computer picks 2, then choose paper
// else choose scissors (because if it aint one or two, then it must be three)
