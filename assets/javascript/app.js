// Array of words for game
const words = ['ford', 'chevy', 'toyota', 'nissan', 'mitsubishi', 'tesla', 'kia'];
console.log("Words:", words);

// Variable Declaration
let displayWord = document.getElementById('blanks');
let incorrect = document.getElementById('incorrect');
let selectWord;
let wins;
let losses;
let games;	
let incorrectLetters = [];
let correctLetters = [];
let guessedLetters = [];
let letter;

// Function to select word from array
const gameSetup = () =>{

	selectWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
	console.log("Selected Word:",  selectWord);

	displayBlankWord(selectWord);
	letterCheck()
	
}


// Function that takes the value of the key entered and compares it to the letters of the selected word.
const letterCheck = () => {
	document.onkeypress = function(evt){
		letter = evt.key.toUpperCase();
		// guessedLetters.push(letter);
		console.log('Guessed letters:', guessedLetters)
		correctGuess(letter)
		

	}
	return letter;
}


const displayBlankWord = (word) =>{

	for(let i = 0; i < word.length; i++){
		correctLetters.push("_")
		
	}

	displayWord.innerHTML = correctLetters.join(" ");
	console.log("Correct Letters:", correctLetters)
	return correctLetters
}

const correctGuess = (letter) => {
if(selectWord.indexOf(letter, -1)){
		incorrectLetters.push(letter)
	}else{

	for(let i = 0; i < selectWord.length; i++){
		if(selectWord[i] === letter){
			correctLetters[i] = letter
		}
	}
	}
	console.log("Correct letter added:", correctLetters)
	console.log("Incorrect letter added:", incorrectLetters)	
	displayWord.innerHTML = correctLetters.join(" ")
	incorrect.innerHTML = incorrectLetters.join(" ")
}

const checkarraySize = (word) => {
	}




gameSetup();




