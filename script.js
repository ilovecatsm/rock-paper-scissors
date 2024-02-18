const choices = ["Rock", "Paper", "Scissors"];
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
