var SplitWord = require("./split-word.js");

function CheckLetter(word) {
  this.word = word;
  self = this;
  var splitting = new SplitWord(this.word);
  this.wordSplit = function() {
    splitting.makesplit();
  };
  this.finishGame = false;
  this.correctGuesses = [];
  this.wrongGuesses = [];
  this.masked = [];
  this.totalChances = 10;
  this.gameOver = function() {
    self.wordSplit();
    console.log("WRONG LETTERS USED: ", this.wrongGuesses);
    if (this.totalChances === 0) {
      console.log("GAME OVER!");
      this.finishGame = true;
    }
    if (splitting.separate.toString() === this.masked.toString()) {
      console.log("You Win!!!");
      this.finishGame = true;
    }
  };

  this.findLetter = function(letter) {
    for (var i = 0; i < word.length; i++) {
      if (letter === word[i] && this.correctGuesses.indexOf(letter) === -1) {
        this.correctGuesses.push(letter);
        console.log("CORRECT!!!!");
        break;
      } else if (this.correctGuesses.indexOf(letter) !== -1) {
        console.log("CORRECT!!! BUT YOU ALREADY GUESSED IT");
        break;
      } else if (i === word.length - 1) {
        this.wrongGuesses.push(letter);
        this.totalChances--;
        console.log("Incorrect!!!");
      }
    }
  };

  this.disguise = function() {
    this.masked.splice(0, this.masked.length);
    if (this.correctGuesses.length === 0) {
      for (var i = 0; i < word.length; i++) {
        this.masked.push("_");
      }
    } else {
      for (var i = 0; i < word.length; i++) {
        correctLetter = word[i];
        if (this.correctGuesses.indexOf(correctLetter) !== -1) {
          this.masked.push(correctLetter);
        } else if (correctLetter === " ") {
          this.masked.push(" ");
        } else {
          this.masked.push("_");
        }
      }
    }
    //console.log(" masked" + this.masked);
  };
  this.show = function() {
    this.disguise();
    this.masked2 = this.masked.join("");
    console.log(this.masked2);
  };
  this.displayScore = function() {
    //this.totalChances = this.totalChances - this.wrongGuesses.length;
    console.log("Chances Left ----> " + this.totalChances);
  };
}

//var test = new CheckLetter("hello");
//test.playGame();

module.exports = CheckLetter;
