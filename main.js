var inquirer = require("inquirer");
var idk = require('./letter.js');
var randomWord = require('./game.js');
var ooh = new idk(randomWord);

var guessedLetters = [];
var correctletters =0;

//play the game function
function letsPlay(){
    console.log("----- Secret Stuff -----");
    console.log(ooh);
    console.log("------------------------");
    console.log("LETS PLAY HANGMAN!");
    ooh.blanks();
    thisGuess();
    
    function thisGuess(){
        //guess function goes until you get all the letters in the word
        if (correctletters - 1 < ooh.wordLen){
            //prompt to guess a letter
            inquirer.prompt([{
                name: "letter",
                message: "Guess a letter: ",
                validate: function(thisLetter){
                    if (thisLetter >= 'a' && thisLetter <= 'z'){
                        return true;
                    }else {
                        return false;
                    }
                }
            }]).then(function(blahguess){
                var newGuess = blahguess.letter;
                
                
                for (var i=0; i<ooh.letterArr.length; i++){
                    if (newGuess == ooh.letterArr[i]){
                        console.log("TEST The letter is in the word!");
                        console.log(i);
                    }
                }
                
                
                //if it's not a repeat guess
                if (guessedLetters.indexOf(newGuess) == -1){
                    
                    //if the letter isn't in the word
                    if (ooh.theWord.indexOf(newGuess) == -1){
                        console.log("sorry, the letter is not in the word");
                    
                        
                    //if the letter is in the word    
                    }else {
                        
                        console.log("The letter is in the word!");
                        correctletters++;
                    }
                    
                    //update guessed letters and number of correct guesses
                    guessedLetters.push(newGuess);
                    
                    
                //the letter was already guessed    
                }else {
                    console.log("You already guessed that letter.");
                }
                
                console.log("You've guessed "+guessedLetters);
                console.log("Correct Guesses: "+correctletters);
                
                //allow user to guess again
                thisGuess();
                });
        
        //the word has been guessed        
        }else {
        console.log("You got it! The word was "+ooh.theWord);
        }
    }
}

letsPlay();

module.exports = ooh;