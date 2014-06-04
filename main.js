// js
var deleteBoxes = function(){
  var clear = document.getElementById("box");
  document.body.removeChild(clear);
};

var createBoxes = function() {
  var number = prompt("How many do you want? (1-10)");

  if(number <= 10){
    var color = prompt("Input a color choice").toLowerCase();
   for(var i=0; i < number; i++){
    var create = document.createElement('div');
    var box = document.body.appendChild(create);
    box.className = "box";
     box.id = "box";
     box.style.backgroundColor = color;
   }
  } else {
    alert("Enter a number ten or less");
  }
};
