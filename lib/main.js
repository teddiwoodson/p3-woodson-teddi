'use strict';

//Global Varibales
var myBoxes = document.getElementsByClassName('block');
var myBoxesLayerTwo = document.getElementsByClassName('block-2');
var myBoxesLayerThree = document.getElementsByClassName('block-3');

//The Functionality
function loopThrough() {
  var _this = this;

  var changeColor = function changeColor() {
    _this.classList.toggle('red');
  };

  for (var i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};

//The Event Listener
for (var i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
};