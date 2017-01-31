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
var WordMap = function(grid) {

};

function Wordsearch (grid) {
// this.wordmap = grid;
this.words = ["SANSA", "VISERYS", "DAENERYS", "CERSEI", "ARYA", "JOFFREY","TYWIN", "SANDOR", "DROGO", "VARYS", "OBERYN", "DOTHRAKI", "TYRION", "BRANDON", "STANIS"];

this.hiddenWords = [];
this.hiddenLetter = [];
this.joinedWord = [];
this.newHiddenWords = [];
this.testLetCol = [];
this.testLetRow = [];
// this.hiddenWords = this.findWord();

}

Wordsearch.prototype.dispTest = function(){

  for (i = 0; i < grid.length - 1; i++){
    this.testLetCol = grid[i].splice(0, 1, "a");
    var row = $('<div>').addClass('row');
    for (j = 0; j < grid[i].length - 1; j++){
      this.testLetRow = grid[j].splice(0, 1, "b");
    }
    console.log(this.testLetCol);
  }
  console.log(grid);
};






Wordsearch.prototype.addLetters = function (){
  	var i = this.hiddenLetter.length , j , temp;
    while (--i > 0) {
      j = Math.floor(Math.random() * (i++));
      temp = this.hiddenLetter[j];
      this.hiddenLetter[j] = this.hiddenLetter[i];
      this.hiddenLetter[i] = temp;
    }
  // return (this.hiddenLetter);
};



Wordsearch.prototype.findWord = function (){
  for (var i = 0; i <= 10; i++){
  var random = Math.floor(Math.random()* this.words.length);
  if (this.hiddenWords.includes(this.words[random]) === false) {
     this.hiddenWords.push(this.words[random]);
   }
  }
  return this.hiddenWords;
};

// function displayHoriz(word){
//   var singleWord = Math.floor(Math.random()* this.hiddenWords.length);
//   singleWord.toString().split([""]);
//   var randomStart = Math.floor(Math.random()* this.wordmap);
// }



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


//
// function displayVert(word){}


// function wordsDisplayer(){
//   var randomFunction = [displayHoriz, displayVert]
//   random method for executing randomFunction[0](word)
// }

var test = new Wordsearch ();


function makeGrid (){
  // $('td').remove();

rows = [];
cols = null;
  for (var i=0; i <=10; i++){
    cols = "";
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(var j=0; j <= 10; j++){
      var random = parseInt(Math.random()* alphabet.length);
        var letter = alphabet.charAt(random);
        var cell = '<td>' + letter + '</td>';
        cols += cell;
    }
     rows.push('<tr>' + cols + '</tr>');
  }
  document.getElementById('letterBox').innerHTML += rows.join("");

}
