var inquirer = require("inquirer");
var CheckLetter = require("./check-letter.js");

function GuessLetter(word) {
  this.word = word;

  var check = new CheckLetter(this.word);
  var self = this;

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
        check.findLetter(answers.letterGuess);
        check.show();
        check.displayScore();

        self.playGame();
      });
  };
}

var test = new GuessLetter("hello");
//test.playGame();
test.playGame();
module.exports = GuessLetter;
