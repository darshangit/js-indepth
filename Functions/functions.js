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
    // selection = DEFAULT_USER_CHOICE;
    return;
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

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
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
  let winner;
  if (playerSelection) {
    winner = getWinner(computerChoice, playerSelection);
  } else {
    winner = getWinner(computerChoice, playerSelection);
  }
  let message = `You picked ${
    playerSelection || DEFAULT_USER_CHOICE
  }, Computer Picked: ${computerChoice}`;
  if (winner === RESULT_DRAW) {
    message = message + '. DRAW.';
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + '. YOU WON.';
  } else {
    message = message + ' YOU LOST.';
  }
  alert(message);
  gameIsRunning = false;
});

//not related

const combine = (resultHandler, operation, ...numbers) => {
  let sum = 0;

  for (const num of numbers) {
    if (operation === 'ADD') sum += num;
    else sum -= num;
  }
  resultHandler(sum);
};

// const subtract = function (resultHandler, ...numbers) {
//   // console.log(arguments) - old way - arguments instead of spread(...)
//   let sum = 0;

//   for (const num of numbers) {
//     sum -= num;
//   }
//   resultHandler(sum, 'The result after substracting number is ');
// };

const showResult = (messageText, result) => {
  alert(messageText + ' ' + result);
};

combine(
  showResult.bind(this, 'The result after adding all numbers is '),
  'ADD',
  1,
  2,
  3,
  23,
  21,
  3
);
combine(
  showResult.bind(this, 'The result after substracting all numbers is '),
  'SUB',
  1,
  2,
  3,
  4,
  4
);
