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

//LayerFour
var layerFour = document.getElementById('layer-four');

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

  var changeColorTwo = function changeColorTwo() {
    return _this2.classList.toggle('red');
  };

  for (var i = 0; i < Number(this.textContent) * 2; i++) {
    setTimeout(changeColorTwo, i * 1000);
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
  setTimeout(swap, Number(this.textContent) * 2 * 1000);
};

function changeLayerThree() {
  var swap = function swap() {
    layerThree.classList.add('hide');
    layerFour.classList.remove('hide');
  };
  setTimeout(swap, 500);
};

//The Event Listener
for (var i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
  myBoxes[i].addEventListener('click', changeLayer);
};

for (var _i = 0; _i < myBoxesLayerTwo.length; _i++) {
  myBoxesLayerTwo[_i].addEventListener('click', loopThroughTwo);
  myBoxesLayerTwo[_i].addEventListener('click', changeLayerTwo);
};

for (var _i2 = 0; _i2 < myBoxesLayerThree.length; _i2++) {
  myBoxesLayerThree[_i2].addEventListener('click', changeLayerThree);
};

//quotes
var quotes = ['A person of words and not deeds is like a garden full of weeds.', 'A pleasant surprise is waiting for you.', 'A short pencil is usually better than a long memory any day.', 'A small donation is call for. It’s the right thing to do.', 'A smile is your personal welcome mat.', 'A smooth long journey! Great expectations.', 'A truly rich life contains love and art in abundance.', 'Accept something that you cannot change, and you will feel better.', 'Adventure can be real happiness.'];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote-display').innerHTML = quotes[randomNumber];
};

for (var _i3 = 0; _i3 < myBoxesLayerThree.length; _i3++) {
  myBoxesLayerThree[_i3].addEventListener('click', newQuote);
};