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

const matchPointBtn = document.querySelector('#match-point');

const resetBtn = document.querySelector('#reset-btn');

let matchPoint = 3;
let isGameOver = false;

const disableBothBtn = () => {
  if (isGameOver) {
    player1.button.disabled = true;
    player2.button.disabled = true;
  }
};

const updateScores = (player) => {
  player.score += 1;
  player.display.textContent = player.score;
  if (player.score === matchPoint) {
    isGameOver = true;
  }
};

matchPointBtn.addEventListener('change', () => {
  console.log(matchPointBtn);
  matchPoint = parseInt(matchPointBtn.value);
  console.log({matchPoint});
  // reset()
});

player1.button.addEventListener('click', () => {
  updateScores(player1);
  disableBothBtn();
});

player2.button.addEventListener('click', () => {
  updateScores(player2);
  disableBothBtn();
});
