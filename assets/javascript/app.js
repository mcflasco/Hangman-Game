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





// Function for inital game setup.
// const gameSetup = () => {

// 	// Select a random word from array, display selected in word in console.
	
// 	console.log('Selected Word:', selectedWord);	

// 	// Loop through the selected word and change HTML to '_' based on how many letters are in the selected word. 
// 	for(let i = 0; i < selectedWord.length; i++){

	// 		// Loop through correct word and replace letter with _
	// 		correctLetters.push("_")

// 		// Display blank spaces from array in HTML.
// 		word.innerHTML = correctLetters.join(" ");
		
// 	}
// 	console.log("Correct Letters:", correctLetters)






// gameSetup();



// If word is fully spellled out stop game
// Add continue button when game ends
// If gamer wins increment "win count"
// If game loses decrement "loss count"
// Add Giphy API for win/lose



// for(let i = 0; i < selectedWord.length; i++){
// 		     	if(selectedWord[i] === letter){
//  		     		correctLetters[i] = letter

// 		     	} 
// 		     }
// 		     word.innerHTML = correctLetters.join(" ")		

// 			// Get onkeyup value after button pressed.
// 			// letter = event.key.toUpperCase();			
// 			// Push guessed letters to array.
// 			guessedLetters.push(letter)	
// 			console.log("Guessed Letters:", guessedLetters)








