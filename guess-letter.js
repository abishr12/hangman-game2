var inquirer = require("inquirer");
var CheckLetter = require("./check-letter.js");

function GuessLetter(word) {
  this.word = word;

  var check = new CheckLetter(this.word);
  var self = this;
  this.responseToLetter = function(letter) {
    check.findLetter(letter);
    check.show();
    check.displayScore();
    check.gameOver();
    if (!check.finishGame) {
      self.playGame();
    }
  };

  this.playGame = function() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "letterGuess",
          message: "Input a letter"
        }
      ])
      .then(function(answers) {
        // check.findLetter(answers.letterGuess);
        // check.show();
        // check.displayScore();
        // if (check.totalChances > 0) {
        //   self.playGame();
        // }
        self.responseToLetter(answers.letterGuess);
      });
  };
}

var test = new GuessLetter("hello there");
//test.playGame();
test.playGame();
