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

const matchPointLabel = document.querySelector('#match-point-label');

let matchPoint = 3;
let previousMatchPoint = matchPoint;
let isGameOver = false;

player1.winnerFlag.style.display = 'none';
player2.winnerFlag.style.display = 'none';
matchPointBtn.value = matchPoint;

const disableBothBtn = (p1, p2) => {
  if (isGameOver) {
    p1.button.disabled = true;
    p2.button.disabled = true;
  }
};

const changeToTiebreaker = (p1, p2) => {
  matchPointLabel.innerText = "Tiebreaker";
  previousMatchPoint = matchPoint;
  matchPoint = 2;
  matchPointBtn.value = matchPoint;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
  }
}

const updateScores = (player, opponent) => {
  player.score += 1;
  player.display.textContent = player.score;
  if (player.score === matchPoint) {
    isGameOver = true;
    player.winnerFlag.style.display = 'block';
  } else if (player.score === (matchPoint - 1) && player.score === opponent.score) {
    console.log("tie breaker");
    changeToTiebreaker(player, opponent);
  }
};

const resetScores = (p1, p2) => {
  matchPointLabel.innerText = "PlayingTo";
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
  updateScores(player1, player2);
  disableBothBtn(player1, player2);
});

player2.button.addEventListener('click', () => {
  updateScores(player2, player1);
  disableBothBtn(player1, player2);
});

resetBtn.addEventListener('click', () => {
  matchPoint = previousMatchPoint;
  matchPointBtn.value = matchPoint;
  resetScores(player1, player2);
});
