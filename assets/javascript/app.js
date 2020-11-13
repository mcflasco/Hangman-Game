// Array of words for game
const words = [
		{title: 'star wars', hint: 'help me obi won, you my only hope'}, 
		{title: 'harry potter', hint: 'your a wizard!'}, 
		{title: 'your highness', hint: "I'm getting dark visions."},
		{title: 'fight club', hint: 'You are not your jobs, or how much money you have in the bank.'},
		{title: 'happy gilmore', hint: 'Its all in the hips.'},
		{title: 'resident evil', hint: "Your're all going to die down here." },
		{title: 'top gun', hint: 'I feel the need, the need for speed'}
]
 // 'fight club', 'happy gilmore', 'rocky', 'edward scissorhands', 'grease', 'resident evil', 'bad boys', 'the waterboy', 'trading places', 'step brothers', 'top gun' ];
for(let i = 0; i < words.length; i++){
	console.log(words[i].title);
}

// Variable Declaration
let displayWord = document.getElementById('blanks');
let displayIncorrect = document.getElementById('incorrect');
let displayWins = document.getElementById('wins');
let displayLosses = document.getElementById('losses');
let outcome = document.getElementById('outcome');
let reset = document.getElementById('reset');
let displayGuess = document.getElementById('guessesLeft')
let movie = document.getElementById('movie');
let displayHint = document.getElementById('hint')
let incorrectLetters = [];
let correctLetters = [];
let guessedLetters = [];
let selectWord;
let selectedWord;
let hint;
let wins = 0;
let losses = 0;
let guesses = 3;
let letter;


// Function to select word from array
const gameSetup = () =>{
	correct = 0;
	guesses = 3;

	for(let i = 0; i < words.length; i++){
			selectWord = words[Math.floor(Math.random() * words.length)]
			selectedWord = selectWord.title.toUpperCase();
			hint = selectWord.hint;
			
	}
			console.log(selectWord)
	console.log("Selected Word:",  selectedWord);

	displayBlankWord(selectedWord);
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
		 if (word[i] == " ") {
		
		    correctLetters.push("&nbsp;");

         } else {
            correctLetters.push("_")
         }
		
	}
	displayHint.innerHTML = "Hint: " + hint;
	displayWord.innerHTML = correctLetters.join(" ");
	console.log("Correct Letters:", correctLetters)
}


const correctGuess = (letter) => {

	if(selectedWord.indexOf(letter) < 0){
		incorrectLetters.push(letter)
		guesses = guesses - 1;
		displayGuess.innerHTML = guesses;
		incorrect.innerHTML = incorrectLetters.join(" ")
		console.log("Incorrect letter added:", incorrectLetters)	

	} else{

	for(let i = 0; i < selectedWord.length; i++){

		if(selectedWord[i] == letter){
			correctLetters[i] = letter
		
			console.log(selectedWord.toString())
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
			for(let i = 0; i < selectedWord.length; i++){
			outcome.innerHTML = "You lose! The answer was '" + selectedWord + "'";
		}
			console.log("you lose");
			editDisplay();
			resetGame();
			
	}

	if(correctLetters.join("").toString().replace("&nbsp;", " ") === selectedWord){
		console.log(selectedWord.toString())
			console.log(correctLetters.toString())
		wins = wins + 1;
		displayWins.innerHTML = wins;
		console.log('Mikasa!');
		outcome.innerHTML = "You win!";
		movie.style.display = "block";
		editDisplay();
		movieApiCall(selectedWord);
		resetGame();
	}

}

let bool = true

const editDisplay = () => {
	// if(bool){

	reset.innerHTML = "<button>Continue!</button>"
	reset.style.display = "block";
	outcome.style.display = 'block';
	displayHint.style.display = "none";

	// } else{
	// 	reset.style.display = 'none';
	// 	outcome.style.display = 'none';
	// 	movie.style.display = "none";
	// }

}

const hintToggle = () => {
	//maybe
}

const resetGame = () => {
	// Change event handler to toggle for button
	reset.addEventListener("click", function(){
		console.log('click');
		correctLetters = [];
		incorrectLetters = [];
		guesses = 3;
		displayGuess.innerHTML = guesses;
		bool = false
		editDisplay()
		reset.style.display = 'none';
	 	outcome.style.display = 'none';
	 	movie.style.display = "none";
	 	displayHint.style.display = "block";
		incorrect.innerHTML = incorrectLetters.join(" ")
		guessedLetters = [];
		
		gameSetup();

	})

}

const movieApiCall = (word) => {
		const api = 'http://www.omdbapi.com/?apikey=';
		const apikey = '';
		const query = '&t=';
		 
		 $.getJSON(api + apikey + query + encodeURI(word)).then((response) => {
		  	console.log(response)
		  	const image = response.Poster

		  	if(image !== "N/A"){
		  		$('#movie').attr('src', image);	
		  	}
		 	
		  })
	}

// Implement start game logic (starting page with app title and start game button, when start game is pressed the dom is updates to display game logic)
// add guess number logic
// Stop keys from being pressed after round is done

gameSetup();









