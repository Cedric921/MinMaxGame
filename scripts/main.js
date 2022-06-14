const btnValidate = document.getElementById('btn-validate');
let round = 5;
let win;
const toDevinne = Math.floor(Math.random() * 10 + 1);

const jouer = () => {
	const user = document.getElementById('userInput');
	const message = document.getElementById('message');
	let userInput = user.value;
	userInput = parseInt(userInput);
	if (isNaN(userInput)) {
		message.textContent = 'entrer un nombre stp';
		return;
	} else {
		if (userInput > toDevinne) {
			message.textContent = 'Your number is to big';
			round--;
		} else if (userInput < toDevinne) {
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
            message.textContent = 'You won, number was ' + toDevinne;
            message.style.color = 'green';
		} else {
            message.textContent = 'You lost, number was ' + toDevinne;
            message.style.color = 'red';
		}
	}
};

btnValidate.addEventListener('click', jouer);

console.log('vb');
