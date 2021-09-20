'use strict';

// console.log(document.querySelector('.highscore').textContent);
// document.querySelector('.highscore').textContent = '1';
// console.log(document.querySelector('.highscore').textContent);

// console.log(document.querySelector('.guess').textContent);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let userScore = 20;
let userHighScore = 0;

const notEqual = (score, message) => {
	if (score > 1) {
		document.querySelector('.message').textContent = message;
		score--;
		document.querySelector('.score').textContent = score;
	} else {
		document.querySelector('.message').textContent = '🤦‍♂️ You lost the game!';
		document.querySelector('.score').textContent = 0;
	}

	return score;
};

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess, typeof guess);

	if (!guess) {
		document.querySelector('.message').textContent = '⛔ Enter a number!';
	} else if (secretNumber === guess) {
		document.querySelector('.message').textContent = '🎉 Corrent number!';
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('body').style.backgroundColor = '#60b347';

		userHighScore = userHighScore < userScore ? userScore : userHighScore;
		document.querySelector('.highscore').textContent = userHighScore;
	} else if (secretNumber < guess) {
		userScore = notEqual(userScore, '⤴ Too high!');
	} else if (secretNumber > guess) {
		userScore = notEqual(userScore, '⤵ Too low!');
	}
});

document.querySelector('.again').addEventListener('click', function () {
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	userScore = 20;

	document.querySelector('.message').textContent = 'Start guessing...';
	document.querySelector('.score').textContent = userScore;
	document.querySelector('.guess').value = '';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').textContent = '?';
});
