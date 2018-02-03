var Word = require('./word.js');
var prompt = require('prompt');

var Game = function() {
    this.wordArr = ['Stranger Things', 'Peaky Blinders', 'Orange is the New Black', 'House of Cards', 'Jessica Jones', 'Master of None', 'Narcos', 'Black Mirror'];
	this.randomWord = this.wordArr[ Math.floor(Math.random() * this.wordArr.length)];
	this.currentWord = new Word(this.randomWord);
}

var hangman = new Game();
var missesLeft = 10;

prompt.start();
gameInit(missesLeft);

function gameInit(guesses) {
    console.log('Guesses Left: ' + guesses);
    if(hangman.currentWord.compareWord() == true) {
        console.log('You Win!');
        return;
    }
    if(guesses <= 0) {
        console.log('Game Over!');
        return;
    }
    console.log(hangman.currentWord.display());

    promot.get(['theGUess'], function(err, result) {
        if (err) {
            return err;
        }
        if (hangman.currentWord.checkLetter(result.theGuess) == false) {
            guesses--;
        }
        gameInit(guesses);
     });
}

console.log(hangman.randomWord);