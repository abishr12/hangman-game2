function CheckLetter(word) {
  this.word = word;
  this.correctGuesses = [];
  this.wrongGuesses = [];
  this.masked = [];
  this.totalChances = 10;
  //var gameWord = new SplitWord(this.word);
  this.findLetter = function(letter) {
    for (var i = 0; i < word.length; i++) {
      if (letter === word[i]) {
        this.correctGuesses.push(letter);
        //console.log("letter found");
        //console.log(this.correctGuesses);
        console.log("CORRECT!!!!");
        break;
      } else if (i === word.length - 1) {
        this.wrongGuesses.push(letter);
        console.log("Incorrect!!!");
      }
    }
    //console.log(this.correctGuesses);
  };

  this.disguise = function() {
    if (this.correctGuesses.length === 0) {
      for (var i = 0; i < word.length; i++) {
        this.masked.push("_");
      }
    } else {
      for (var i = 0; i < word.length; i++) {
        correctLetter = word[i];
        for (var a = 0; a < this.correctGuesses.length; a++) {
          if (correctLetter === this.correctGuesses[a]) {
            this.masked.push(correctLetter);
          } else if (a === this.correctGuesses.length - 1) {
            this.masked.push("_");
          }
        }
      }
    }

    //console.log(this.masked);
  };
  this.show = function() {
    this.disguise();
    this.masked2 = this.masked.join("");
    console.log(this.masked2);
  };
  this.displayScore = function() {
    this.totalChances = this.totalChances - this.wrongGuesses.length;
    console.log("Chances Left ---->" + this.totalChances);
  };
}

//var test = new CheckLetter("hello");
//test.playGame();

module.exports = CheckLetter;
