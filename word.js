//This will import the letter constructor
var Letter = require('./letter.js');

var Word = function(word) {
    this.word = word;
    this.lettersInWord = [];
    this.winsGame = false;
    this.guesses = [];

    this.getLetters = function () {
        for (var i = 0; i < this.word.length; i++) {
            var newLetter = new Letter(this.word[i]);
            this.lettersInWord.push(newLetter);
        }
    };
this.getLetters();
    this.checkLetter = function(guessLetter) {
        for (var i = 0; i = this.guesses.length; i++) {
            if (guessLetter == this.guesses[i]) {
                return true;
            }
        }
        console.log(guessLetter);
        var added = false;
        this.guesses.push(guessLetter);
        for (var i = 0; i < this.word.length; i++) {
            if (this.word[i].letterin(guessLetter)) {
                this.word[i].guessed = true;
                added = true;
            }
        }
        return added

    }
    this.compareWord = function() {
        for (var i = 0; i < this.word.length; i++) {
            if (this.word.charAt(i) != this.lettersInWord[i].current) {
                return false;
            }

        }
        return true;
    }
    this.display = function() {
        var emptyString = '';
        for (var i = 0; i = this.lettersInWord.length; i++) {
            emptyString += this.lettersInWord[i].current + ' ';
        }
        return emptyString;
    }
}

module.exports = Word;