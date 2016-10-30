var MysteryWord = require('./game.js');
var guesses = 10;

function Letter(){
};

Letter.prototype.Hangman = function(outcome, theWord, lettersInWord){
	
	var hangmanBlanks = " ";

	for(var i=0; i<theWord.length; i++){
		var found = lettersInWord.indexOf(theWord.charAt(i))>-1;
		if(found) {
			hangmanBlanks += theWord.charAt(i)+" ";
		}
		else {
			hangmanBlanks += "_ ";
		}
	}
	console.log("");
	console.log(hangmanBlanks.bgCyan);
	console.log("");

	if(outcome == "incorrect"){
		guesses--;
	}
	console.log("Guesses remaining: "+guesses);

	//if there are no more blanks to fill, you win
	if(hangmanBlanks.indexOf("_") == -1){
		console.log("----------------------------------------".rainbow);
		console.log(">> You win! :) The word was "+ MysteryWord+".".cyan);
		console.log("----------------------------------------".rainbow);
		process.exit();
	}

	//if you run out of guesses, you lose
	if(guesses==0){
		console.log("----------------------------------------".rainbow);
		console.log(">> You lose. :( The word was "+ MysteryWord+".".cyan);
		console.log("----------------------------------------".rainbow);
		process.exit();
	}
};

module.exports = Letter;