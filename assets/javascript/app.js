// Array of words for game
const words = ['star wars', 'harry potter', 'your highness', 'fight club', 'happy gilmore', 'rocky', 'edward scissorhands', 'grease', 'resident evil', 'bad boys', 'the waterboy', 'trading places', 'step brothers', 'top gun' ];
console.log("Words:", words);

// Variable Declaration
let displayWord = document.getElementById('blanks');
let displayIncorrect = document.getElementById('incorrect');
let displayWins = document.getElementById('wins');
let displayLosses = document.getElementById('losses');
let outcome = document.getElementById('outcome');
let reset = document.getElementById('reset');
let displayGuess = document.getElementById('guessesLeft')



let incorrectLetters = [];
let correctLetters = [];
let guessedLetters = [];
let selectWord;
let wins = 0;
let losses = 0;
let guesses;
let letter;


// Function to select word from array
const gameSetup = () =>{
	
	correct = 0;
	guesses = 3;
	selectWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
	console.log("Selected Word:",  selectWord);
	displayBlankWord(selectWord);
	letterCheck()	
	movieApiCall(selectWord);

	
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
		 if (word[i] == " ") {
		
		    correctLetters.push("&nbsp;");

         } else {
            correctLetters.push("_")
         }
		
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
		
			console.log(selectWord.toString())
			console.log(correctLetters.toString())
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
			for(let i = 0; i < selectWord.length; i++){
			outcome.innerHTML = "You lose! The answer was '" + selectWord + "'";
		}
			console.log("you lose");
			editDisplay();
			resetGame();
			
	}

	else if(correctLetters.join("").toString().replace("&nbsp;", " ") === selectWord){
		console.log(selectWord.toString())
			console.log(correctLetters.toString())
		wins = wins + 1;
		displayWins.innerHTML = wins;
		console.log('Mikasa!');
		outcome.innerHTML = "You win!";
		editDisplay();
		resetGame();
	}

}

const editDisplay = () => {
	reset.innerHTML = "<button>Continue!</button>"
	reset.style.display = "block";
	outcome.style.display = 'block';
}

const resetGame = () => {
	// Change event handler to toggle for button
	reset.addEventListener("click", function(){
		console.log('click');
		correctLetters = [];
		incorrectLetters = [];
		incorrect.innerHTML = incorrectLetters.join(" ")
		guessedLetters = [];
		reset.style.display = 'none';
		outcome.style.display = 'none';
		gameSetup();

	})

}

const movieApiCall = (word) => {
		const api = 'http://www.omdbapi.com/?apikey=';
		const apikey = '?';
		const query = '&t=';
		 word = word.toLowerCase()
		 $.getJSON(api + apikey + query + encodeURI(word)).then((response) => {
		  	console.log(response)
		 	
		  })
	}
// Find way to get around the spacing issue with double word answers
// Stop keys from being pressed after round is done

gameSetup();









