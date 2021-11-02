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
  }
};

const resetScores = (p1, p2) => {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-background-success-dark', 'has-background-danger-dark');
    p.button.disabled = false;
  }
};

const changeScoreColors = (p1, p2) => {
  if (!isGameOver) {
    return;
  }

  if (p1.score === matchPoint) {
    p1.display.classList.add('has-background-success-dark');
    p2.display.classList.add('has-background-danger-dark');

  } else if (p2.score === matchPoint) {
    p2.display.classList.add('has-background-success-dark');
    p1.display.classList.add('has-background-danger-dark');
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
  changeScoreColors(player1, player2);
  disableBothBtn(player1, player2);
  changeScoreColors(player1, player2);
});

player2.button.addEventListener('click', () => {
  updateScores(player2);
  changeScoreColors(player1, player2);
  disableBothBtn(player1, player2);
  changeScoreColors(player1, player2);
});

resetBtn.addEventListener('click', () => {
  resetScores(player1, player2);
});
