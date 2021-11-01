const player1 = {
  score: 0,
  button: document.querySelector('#player1-btn'),
  display: document.querySelector('#player1-score')
};

const player2 = {
  score: 0,
  button: document.querySelector('#player2-btn'),
  display: document.querySelector('#player2-score')
};

console.log(player1);
console.log(player2);

const matchPointBtn = document.querySelector('#match-point');

const resetBtn = document.querySelector('#reset-btn');

let matchPoint = 3;
let isGameOver = false;

const disableBothBtn = () => {
  if (isGameOver) {
    player1.button.disabled = true;
    player2.button.disabled = true;
  }
}

const updateScores = (player) => {
  player.score += 1;
  player.display.textContent = player.score;
  if (player.score === matchPoint) {
    isGameOver = true;
  }
}

player1.button.addEventListener('click', () => {
  console.log("player 1");
  updateScores(player1);
  disableBothBtn();
});

player2.button.addEventListener('click', () => {
  console.log("player 2");
  updateScores(player2);
  disableBothBtn();
});
