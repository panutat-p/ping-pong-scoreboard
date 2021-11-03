const player1 = {
  score: 0,
  button: document.querySelector('#player1-btn'),
  display: document.querySelector('#player1-score'),
  winnerFlag: document.querySelector('#p1-winner-flag')
};

const player2 = {
  score: 0,
  button: document.querySelector('#player2-btn'),
  display: document.querySelector('#player2-score'),
  winnerFlag: document.querySelector('#p2-winner-flag')
};

const matchPointBtn = document.querySelector('#match-point');

const resetBtn = document.querySelector('#reset-btn');

player1.winnerFlag.style.display = 'none';
player2.winnerFlag.style.display = 'none';

let matchPoint = 3;
let isGameOver = false;

const disableBothBtn = (p1, p2) => {
  if (isGameOver) {
    p1.button.disabled = true;
    p2.button.disabled = true;
  }
};

const updateScores = (player) => {
  player.score += 1;
  player.display.textContent = player.score;
  if (player.score === matchPoint) {
    isGameOver = true;
    player.winnerFlag.style.display = 'block';
  }
};

const resetScores = (p1, p2) => {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.button.disabled = false;
    p.winnerFlag.style.display = 'none';
  }
};

matchPointBtn.addEventListener('change', () => {
  console.log(matchPointBtn);
  matchPoint = parseInt(matchPointBtn.value);
  console.log({matchPoint});
  resetScores(player1, player2);
});

player1.button.addEventListener('click', () => {
  updateScores(player1);
  disableBothBtn(player1, player2);
});

player2.button.addEventListener('click', () => {
  updateScores(player2);
  disableBothBtn(player1, player2);
});

resetBtn.addEventListener('click', () => {
  resetScores(player1, player2);
});
