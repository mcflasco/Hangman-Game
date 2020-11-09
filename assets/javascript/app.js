// Array of words for game
const words = ['ford', 'chevy', 'toyota', 'nissan', 'mitsubishi', 'tesla', 'kia'];
console.log("Words:", words);

// Variable Declaration
let displayWord = document.getElementById('blanks');
let displayIncorrect = document.getElementById('incorrect');
let displayWins = document.getElementById('wins');
let displayLosses = document.getElementById('losses');
let outcome = document.getElementById('outcome');
let incorrectLetters = [];
let correctLetters = [];
let guessedLetters = [];
let selectWord;
let wins = 0;
let losses = 0;
let guesses = 3;
let correct = 0;
let games;	
let letter;


// Function to select word from array
const gameSetup = () =>{
	
	correct = 0;
	guesses = 3;
	selectWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
	console.log("Selected Word:",  selectWord);
	displayBlankWord(selectWord);
	letterCheck()	
	
}


// Function that takes the value of the key entered and compares it to the letters of the selected word.
const letterCheck = () => {

	document.onkeypress = function(evt){
		letter = evt.key.toUpperCase();
		guessedLetters.push(letter);	
		correctGuess(letter);
	}
	return letter;
}


const displayBlankWord = (word) =>{

	for(let i = 0; i < word.length; i++){
		correctLetters.push("_")
	}

	displayWord.innerHTML = correctLetters.join(" ");
	console.log("Correct Letters:", correctLetters)

}


const correctGuess = (letter) => {

	if(selectWord.indexOf(letter) < 0){
		incorrectLetters.push(letter)
		guesses = guesses - 1;
		incorrect.innerHTML = incorrectLetters.join(" ")
		console.log("Incorrect letter added:", incorrectLetters)	

	} else{

	for(let i = 0; i < selectWord.length; i++){
		if(selectWord[i] == letter){
			correctLetters[i] = letter
			correct = correct + 1;
			console.log(correct)	
			
		}
	}
}
	
	console.log("Correct letter added:", correctLetters)
	displayWord.innerHTML = correctLetters.join(" ")
	gameOutcome();
}


const gameOutcome = () => {
	if(guesses == 0){
			losses = losses + 1;
			displayLosses.innerHTML = losses;
			outcome.innerHTML = "You lose!";
			console.log("you lose");
			incorrectLetters = []
			correctLetters = []
			guessedLetters = []	
			gameSetup();
	}

	else if(correctLetters.join("").toString() === selectWord.toString()){
		wins = wins + 1;
		displayWins.innerHTML = wins;
		console.log('Mikasa!');
		outcome.innerHTML = "you won!";
		correctLetters = []
		incorrectLetters = []
		guessedLetters = []	
		gameSetup();
		
	}

}

gameSetup();









