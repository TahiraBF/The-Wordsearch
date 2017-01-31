// wordsearch = new Wordsearch();
//
// function makeGrid(){
//   wordsearch.dispTest();
//     for (i= 0; i < 10; i++){
//     this.testLetCol = $('<div>').addClass('row');
//       for (j = 0; j < 10; j++){
//     this.testLetRow = $('<div>').addClass('charField').attr('id', i + '-' + j);
//       }
//   this.testLetCol.append(this.testLetRow);
//     }
//     $('#container').append(this.testLetCol);
// }


function makeGrid(){
  for (var i = 0; i < 10; i++) {
    var row = $('<div>').addClass('row');
    for (var j = 0; j < 10; j++) {
      var field = $('<div>').addClass('charField').attr('id', i + '-' + j);
      row.append(field);
    }
    $('#container').append(row);

  }
}




$(document).ready(function() {


var wordsearch;

var newGameClick = function () {
    startPlay();
    wordsearch = new Wordsearch();
    makeGrid();
  };

var startPlay = function() {
  document.getElementById("popBox").classList = "hide";
  document.getElementById("sideList").classList = "";
};

var getWords = function () {

  wordsearch.findWord();
  var wordsList = wordsearch.hiddenWords;
  var hiddenWords = document.getElementById("hiddenWords");

  wordsList.forEach(function () {
    var listedWord = document.createElement("li");
    var content    = document.createTextNode("");

    listedWord.appendChild(content);
    hiddenWords.appendChild(listedWord);

  });
};













document.getElementById("play").addEventListener("click", newGameClick);


});
