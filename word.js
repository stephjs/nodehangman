//all the prompting happens here
var inquirer=require('inquirer');

//uses Letter prototype
var Letter = require('./letter.js');
var letterInstance = new Letter();

var allGuesses = [];
var correctLetters = [];
var incorrectLetters = [];
var countprompts = 1;


function Word(wordIn){
	this.wordIn = wordIn;
}

Word.prototype.prompt = function(){
	//self is being used to maintain a reference to the 
	//original 'this' even as the context is changing
	var self = this;
	inquirer.prompt([
		{
	        name: "letter",
	        message: countprompts+". Guess a letter: ",
	        validate: function(thisLetter){
	        	// only let input be 1 letter
	        	if (thisLetter.length != 1){
	        		return "Please guess one letter";
	        		return false;
	        	}
	        	//input must be a lowercase letter
	            if (thisLetter >= 'a' && thisLetter <= 'z'){
	                return true;
	            }else {
	            	return "Please guess a lowercase letter";
	                return false;
	            }
	        }
	    }
	]).then(function(thatguess) {
		var letter = thatguess.letter;
		if (allGuesses.indexOf(letter)>-1) {
		 	console.log("You already guessed that letter.");
		}
		else {
			countprompts++;
			if(self.wordIn.includes(letter)){ // correct guess
				correctLetters.push(letter);
				allGuesses.push(letter);
				letterInstance.Hangman("correct", self.wordIn, correctLetters);
			}
			else if(!self.wordIn.includes(letter)){ // incorrect guess
				incorrectLetters.push(" "+letter);
				allGuesses.push(letter);
				letterInstance.Hangman("incorrect", self.wordIn, correctLetters);
			}
		}
		console.log("Incorrect Guesses: "+incorrectLetters);
		console.log("---------------------------".underline.cyan);
		self.prompt();
	});
};

module.exports = Word;