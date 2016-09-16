//need to be able to select a random word from list
//use math random

var list = ["ironic", "filter", "chella", "brooklyn", "barrista", "liberal", "basic", 
"thundercats", "ugh", "gentrify", "juicing", "kitsch", "kogi", "biodiesel", "chartreuse", 
"skateboard", "artisan", "pitchfork", "organic", "ipa", "ethical", "chambray", "overexposed", "hashtag", "umami", "kale",
"sriracha", "affogato", "brunch", "aesthetic", "banjo", "distillery", "chill", "vegan", "typewriter",
"quinoa", "tumblr", "hammock", "dreamcatcher", "beard", "cronut", "emoji", "moustache", "unicycle"];

//list[position] will be return a random word in the list
//this will work no matter how long the list of words is
var position = Math.floor(Math.random()*(list.length));

var randomWord = list[position];
//console.log(randomWord);

//need to be able to export the word to other files....
module.exports = randomWord;