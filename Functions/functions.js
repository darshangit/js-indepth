const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
const DEFAULT_USER_CHOICE = ROCK;
let gameIsRunning = false;

const getPlayerChoice = function () {
  let selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}?`, '').toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice!We chose ${DEFAULT_USER_CHOICE} for you`);
    selection = DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  let computerSelection = ROCK;

  if (randomValue > 0.34 && randomValue < 0.67) {
    computerSelection = PAPER;
  } else if (randomValue >= 0.67 && randomValue <= 1) {
    computerSelection = SCISSORS;
  }

  return computerSelection;
};

const add = (a, b) => a + b;

const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

startGameBtn.addEventListener('click', function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting');
  const playerSelection = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerSelection, computerChoice);
  console.log('Player: ', playerSelection, 'Computer: ', computerChoice);
  console.log(winner);
});
