'use strict';

let seceretNumber = Math.trunc(Math.random() * 20) + 1;

let scoreState = 20;
let highscore = 0;

const messageContent = function (message) {
  return (document.querySelector('.message').textContent = message);
};
const scoreContent = function (message) {
  return (document.querySelector('.score').textContent = message);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    messageContent('No Number! ⛔️');
    // when player wins
  } else if (guess === seceretNumber) {
    messageContent('Correct Number!🎉');
    document.querySelector('.number').textContent = seceretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highScore').textContent = 'highscore';
    }
    // when guess is wrong
  } else if (guess !== seceretNumber) {
    if (scoreState > 1) {
      messageContent(
        guess > seceretNumber
          ? 'Uh-Oh, Number is Too High!↖️'
          : 'Uh-Oh, Number is Too Low!↘️'
      );
      scoreState--;
      scoreContent(scoreState);
    } else {
      messageContent('YOU LOST THE GAME 😰');
      scoreContent(0);
    }
  }
});

//when clicking again/reset
document.querySelector('.again').addEventListener('click', function () {
  //document.querySelector('.score').textContent = 20;
  score = 20;
  scoreContent(score);
  seceretNumber = Math.trunc(Math.random() * 20) + 1;
  //reassign the secret number. make sure the variable is let not const
  messageContent('Start guessing...');

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').textContent = '';
});
