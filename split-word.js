function SplitWord(word) {
  this.separate = [];
  this.makesplit = function() {
    this.separate.splice(0, this.separate.length);
    for (var i = 0; i < word.length; i++) {
      this.separate.push(word[i]);
    }
  };
}

module.exports = SplitWord;
