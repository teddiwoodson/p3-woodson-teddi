'use strict';

//Global Varibales
//Layer one
var layerOne = document.getElementById('layer-one');
var myBoxes = document.getElementsByClassName('block');

//Layer two
var layerTwo = document.getElementById('layer-two');
var myBoxesLayerTwo = document.getElementsByClassName('block-2');

//Layer three
var layerThree = document.getElementById('layer-three');
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

function loopThroughTwo() {
  var _this2 = this;

  var changeColor = function changeColor() {
    _this2.classList.toggle('red');
  };
  for (var i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};

function changeLayer() {
  var swap = function swap() {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  };
  setTimeout(swap, this.textContent.length * 2 * 1000);
};

function changeLayerTwo() {
  var swap = function swap() {
    layerTwo.classList.add('hide');
    layerThree.classList.remove('hide');
  };
  setTimeout(swap, this.textContent.length * 2 * 1000);
};

//The Event Listener
for (var i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
  myBoxes[i].addEventListener('click', changeLayer);
  myBoxesLayerTwo[i].addEventListener('click', loopThroughTwo);
  myBoxesLayerTwo[i].addEventListener('click', changeLayerTwo);
};