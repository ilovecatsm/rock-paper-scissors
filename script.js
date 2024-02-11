// Create the variables for the rock, paper, scissors done
// make the function (this function will be for letting the computer pick what it wants)
// let the user choose what they want to pick
// the computer randomly chooses what it'll pick based of the variables from earlier
// win or lose scenario output

let choices = ["Rock", "Paper", "Scissors"];

// computer choices
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3 + 1);
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
