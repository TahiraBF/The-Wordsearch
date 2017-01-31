var newGameClick = function () {
    
    startPlay();
    makeGrid();
    makeList();
    // wordsearch = new Wordsearch();
    // makeGrid();
  };

var startPlay = function() {
  // document.getElementById("popBox").classList = "hide";
  document.getElementById("sideList").classList = "";
};

document.getElementById("play").addEventListener("click", newGameClick);

// var createGrid = function (){
//   document.createElement()
//
// }
