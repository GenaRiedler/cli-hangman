//This is the letter constuctor

var Letter = function(letter) {
    this.current = '_';
    this.letter = letter;
    this.guessed = false;
    
    this.toString = function() {
        if (this.guessed) {
            return this.letter;
        } else {
            return '_';
        }
    };

    this.letterGuessed = function() {
        if (this.letter == ' ') {
            this.display = true;
            return ' ';
        } else {
            this.display = false;
        }
    }
};



module.exports = Letter;