// Create game objects:

var T = true , F = false;
var grid = [
            [F, F, F, F, F, F, F, F, F, F],
            [F, F, F, F, F, F, F, F, F, F],
            [F, F, F, F, F, F, F, F, F, F],
            [F, F, F, F, F, F, F, F, F, F],
            [F, F, F, F, F, F, F, F, F, F],
            [F, F, F, F, F, F, F, F, F, F],
            [F, F, F, F, F, F, F, F, F, F],
            [F, F, F, F, F, F, F, F, F, F],
            [F, F, F, F, F, F, F, F, F, F],
            [F, F, F, F, F, F, F, F, F, F],
];

// ///// //// ///

function Wordsearch () {
this.words = ["SANSA", "VISERYS", "DAENERYS", "CERSEI", "ARYA", "JOFFREY","TYWIN", "SANDOR", "DROGO", "VARYS", "OBERYN", "DOTHRAKI", "TYRION", "BRANDON", "STANIS"];

this.hiddenWords = [];
this.hiddenLetter = [];
this.joinedWord = [];
this.newHiddenWords = [];
// this.hiddenWords = this.findWord();

}

Wordsearch.prototype.findWord = function (){
  for (var i = 0; i <= 10; i++){
  var random = Math.floor(Math.random()* this.words.length);
  if (this.hiddenWords.includes(this.words[random]) === false) {
     this.hiddenWords.push(this.words[random]);
   }
  }
  return this.hiddenWords;
};

Wordsearch.prototype.letters = function (){
  this.hiddenLetter = this.hiddenWords.toString().split([""]);
  return this.hiddenLetter;
};

Wordsearch.prototype.checkWord = function (){
  var selected = [];
  for (i = 0; i < selected.length; i++){
    this.joinedWord = selected.join("");
    if (this.hiddenWords.includes(this.joinedWord) === true){
      return this.foundWord();
    }
    else {
      return false;
    }
  }
};

Wordsearch.prototype.foundWord = function (){
    this.newHiddenWords = _.difference(this.hiddenWords,[this.joinedWord]);
  return this.newHiddenWords;
};

Wordsearch.prototype.gameStatus = function (){
  this.checkWord();
  if (this.newHiddenWords.length > 0){
    return this.newHiddenWords.length;
  }
    else {
      alert("Game Won");
  }
};

// function displayHoriz(word){
//
// }
//
// function displayVert(word){}


// function wordsDisplayer(){
//   var randomFunction = [displayHoriz, displayVert]
//   random method for executing randomFunction[0](word)
// }

var test = new Wordsearch ();
