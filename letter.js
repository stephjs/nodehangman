//REQUIREMENTS//
//letter.js will be a constructor file
//should control whether or not a letter appears as a "_" or as itself on-screen.
//requires game.js for the random word
/////


//so we're able to get the random word from the game.js file
var randomWord = require('./game.js');

// //check, check.... this works!
// console.log("The word is: "+randomWord);
// console.log("It is "+randomWord.length+ " letters long.");


// //split word into letters, put letters in an array
// var splitWord = randomWord.split('');
// console.log(splitWord);



var blanks = "";
// for (var i=0; i<splitWord.length; i++){
//     blanks = blanks + '_ ';
// }
// console.log(blanks);

// //need to be able to export the word to other files....
// module.exports = blanks;

function idk(theWord){
    this.theWord = theWord,
    this.wordLen = theWord.length,
    this.letterArr = theWord.split(''),
    this.blanks = function(){
        for (var i=0; i<this.wordLen; i++){
            blanks = blanks + '_ ';
        }
        console.log(blanks);
    };
}

// var ooh = new idk(randomWord);
// console.log(ooh);
// ooh.blanks();

module.exports = idk;