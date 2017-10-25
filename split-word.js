function SplitWord(word) {
  this.separate = [];
  this.makesplit = function() {
    this.separate.splice(0, this.separate.length);
    for (var i = 0; i < word.length; i++) {
      this.separate.push(word[i]);
    }
  };
}

// var adham = new SplitWord("hello");
// adham.makesplit();
//
// console.log(adham.separate[3]);

module.exports = SplitWord;
