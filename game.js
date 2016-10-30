var list = ["ironic", "filter", "chella", "brooklyn", "barrista", "liberal", "basic", 
"thundercats", "ugh", "gentrify", "juicing", "kitsch", "kogi", "biodiesel", "chartreuse", 
"skateboard", "artisan", "pitchfork", "organic", "ipa", "ethical", "chambray", "overexposed", "hashtag", "umami", "kale",
"sriracha", "affogato", "brunch", "aesthetic", "banjo", "distillery", "chill", "vegan", "typewriter",
"quinoa", "tumblr", "hammock", "dreamcatcher", "beard", "cronut", "emoji", "moustache", "unicycle"];

var index = Math.floor(Math.random()*(list.length));

var mysteryWord = list[index];
//console.log(randomWord);

//need to be able to export the word to other files....
module.exports = mysteryWord;