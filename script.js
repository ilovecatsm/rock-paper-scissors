// Create the variables for the rock, paper, scissors done
// make the function (this function will be for letting the computer pick what it wants) done
// let the user choose what they want to pick
// the computer randomly chooses what it'll pick based of the variables from earlier
// win or lose scenario output

let choices = ["Rock", "Paper", "Scissors"];

// gets player input
function playerSelection() {
  prompt("What will you choose?");
  if (playerSelection === "Rock") {
    return "You chose Rock";
  } else if (playerSelection === "Paper") {
    return "You chose Paper.";
  } else if (playerSelection === "Scissors") {
    return "You chose Scissors.";
  } else return "Please type rock, paper, or scissors!";
}
// get player input
// set the player input to show as all lowercase except for the first letter (which should always be zero)
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
