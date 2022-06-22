const btnValidate = document.getElementById('btn-validate');
let round = 5;
let win;
const toGuess = Math.floor(Math.random() * 10 + 1);

const jouer = () => {
	const user = document.getElementById('userInput');
	const message = document.getElementById('message');
	let userInput = user.value;
	userInput = parseInt(userInput);
	if (isNaN(userInput)) {
		message.textContent = 'entrer un nombre stp';
		return;
	} else {
		if (userInput > toGuess) {
			message.textContent = 'Your number is to big';
			round--;
		} else if (userInput < toGuess) {
			message.textContent = 'Your number is too small';
			round--;
		} else {

            	win = true;
            	round = 0;
        }
        	message.innerHTML += `<br> vous avez encore ${round} tentatives`
	}
	if (round <= 0) {
		if (win) {
            		message.textContent = 'You won, number was ' + toGuess;
            		message.style.color = 'green';
		} else {
            		message.textContent = 'You lost, number was ' + toGuess;
            		message.style.color = 'red';
		}
	}
};
btnValidate.addEventListener('click', jouer);
