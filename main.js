var Word = require('./word.js');
var MysteryWord = require('./game.js');
var colors = require('colors');

// uncomment for testing purposes
// console.log("--------- Secret Stuff ---------");
// console.log("Shhh! The word is "+MysteryWord+"."); 
// console.log("--------------------------------");


//new game starts when word blanks are printed
printBlanks(MysteryWord);

//prints the blanks at the beginning of the game
function printBlanks (currentWord) {
    console.log("---------------------------".rainbow);
    console.log("");
    console.log("LETS PLAY HIPSTER HANGMAN!".rainbow);
    console.log("");
    var blanks = " ";
    for(var i=0;i<currentWord.length;i++){
        blanks += "_ ";
    }
    console.log(blanks);
    console.log("---------------------------".rainbow);
}

var wordInstance = new Word(MysteryWord);
wordInstance.prompt();