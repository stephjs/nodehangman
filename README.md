# Hipster Hangman (Node.js edition)

![screen shot 2016-10-30 at 4 21 56 pm](https://cloud.githubusercontent.com/assets/18673328/19840863/15c45258-9ebd-11e6-84cc-7ce1380cedb9.png)

This Hangman game is built with Node.js and runs exclusively in the command line. The logic in this Hipster Hangman game is really similar to the [Vanilla Javascript game](https://github.com/stephorpilla/hipsterhangman) I built. The main difference is that this game incorporates JavaScript constructors.

## Dependencies

Clone this repo to your desktop and run `npm install` to install its 2 dependencies.

- [Colors](https://www.npmjs.com/package/colors): Used to generate colored text in the console

- [Inquirer](https://www.npmjs.com/package/inquirer): Used to prompt users to guess a letter in the word

## Game Play
- Run `node main.js` to play

- The player will be prompted to guess a letter. The game has built in validation to make sure that a single lowercase letter is guessed. 

- If the player guesses an incorrect letter, guesses remaining goes down one. Making a repeat guess doesn't have a penalty. The game will just let the player know that it's a repeat guess and to guess again.

- ![screen shot 2016-10-30 at 4 26 02 pm](https://cloud.githubusercontent.com/assets/18673328/19840878/a5d67ee8-9ebd-11e6-94e0-365713d29c93.png)

## Game Results
- Lose: If the player uses up all 10 guesses before figuring out the word, the player loses.

- Win: If the player fills in every blank of the word before running out of guesses, they win!

- ![screen shot 2016-10-30 at 4 32 44 pm](https://cloud.githubusercontent.com/assets/18673328/19840917/86978d00-9ebe-11e6-87a9-0f469d914745.png)
