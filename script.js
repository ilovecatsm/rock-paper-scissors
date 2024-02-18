const choices = ["rock", "paper", "scissors"];
const playerSelection = playerInput();
const computerSelection = getComputerChoice();

// computer choices
function getComputerChoice() {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}
// checks who won the round
function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    return "Player";
  } else return "Computer";
}
// initializes the round
function playRound(playerSelection, computerSelection) {
  const winner = checkWinner(playerSelection, computerSelection);
  if (winner === "Tie") {
    return `It's a tie! You both chose ${playerSelection}`;
  } else if (winner === "Player") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else return `You lose! ${computerSelection} beats ${playerSelection}`;
}
// gets player input and checks it
function playerInput() {
  let input = prompt("Choose Rock, Paper, or Scissors");
  while (input == null) {
    input = prompt("Choose Rock, Paper, or Scissors");
  }
  input = input.toLowerCase();
  let check = validatePlayerInput(input);
  if (check == true) {
    return input;
  }
}
// checks to make sure that the input is from the choices array
function validatePlayerInput(choice) {
  if (choices.includes(choice)) {
    return true;
  } else {
    return false;
  }
}
// initializes the game in general (including the score)
function playGame() {
  console.log("Game Starting");
  for (let i = 0; i < 5; i++) {
    const playerSelection = playerInput();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  console.log("Play again?");
}
console.log(playGame());
