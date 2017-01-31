var myGrid = new Array(10);
var newGrid = [];
var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function makeGrid(num_row , num_col){
$('td').remove();
num_row = 10;
num_col = 10;
  for (var i = 0; i < num_row; i++){
    myGrid[i] = new Array(10);
      for (var j = 0; j < num_col; j++){
        var random = parseInt(Math.floor(Math.random()* alphabet.length));
        var letter  = alphabet.charAt(random);
        newGrid.splice(0, 0, letter);
        $('#squares').append('<td>' + letter + '</td>');
    }
  }
  return newGrid;
}

var words = ["SANSA", "VISERYS", "DAENERYS", "CERSEI", "ARYA", "JOFFREY","TYWIN", "SANDOR", "DROGO", "VARYS", "OBERYN", "DOTHRAKI", "TYRION", "BRANDON", "STANIS", "SANDSNAKE", "JONSNOW", "DIREWOLF", "GREYJOY"];
var hiddenWords = [];

function makeList (){
  $('li').remove();
  for (var i = 0; i < 10; i++){
    var random = Math.floor(Math.random()* words.length);
    if (hiddenWords.includes(words[random]) === false){
      hiddenWords.splice(0, 1, words[random]);
      $('#hiddenWords').append('<li>' + hiddenWords + '</li>');
    }
    else {
      alert ("not enough hidden words");
    }
  }
}

function addWords () {

}

function addHoriz (){
  var randomPos = Math.floor(Math.random()* 10);
  console.log(randomPos);
  return newGrid[randomPos];
}
