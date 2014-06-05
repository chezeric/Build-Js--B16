// js
var boxes = [];
 var bleep = new Audio('bleep.mp3');
var createBoxes = function() {
  var boxCount = boxes.length;
  var remaining = (10 - boxes.length);

  if (remaining === 0) {
    alert("No more space remains.");
    return false;
  }

  var number = prompt("How many do you want? " + remaining + " slots left.");

  if(number <= remaining) {
    var color = prompt("Input a color choice").toLowerCase();

    for(var i=0; i < number; i++) {
      var div = document.createElement('div');
      var box = document.querySelector('#boxes').appendChild(div);
      box.className = "box";
      box.style.backgroundColor = color;
      box.id = "box" + boxes.length;
      var boxID = box.id;
      boxes.push(boxID);
    }
  } else {
      alert("Must be " + remaining + " or less");
  }
};

var deleteBoxes = function() {

  if (document.querySelector('#boxes').hasChildNodes() === false) {
    alert ("Dale, there aren't any more boxes to delete!!");
  } else {
    bleep.play(bleep.mp3);
    var clear = document.querySelector('#boxes');
  clear.removeChild(clear.lastChild);
  boxes.pop();
  }
};
