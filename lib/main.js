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

function changeLayerThree() {
  var swap = function swap() {
    layerThree.classList.add('hide');
    layerFour.classList.remove('hide');
  };
  setTimeout(swap, 1000);
};

//The Event Listener
for (var i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
  myBoxes[i].addEventListener('click', changeLayer);
  myBoxesLayerTwo[i].addEventListener('click', loopThroughTwo);
  myBoxesLayerTwo[i].addEventListener('click', changeLayerTwo);
  myBoxesLayerThree[i].addEventListener('click', changeLayerThree);
};

//quotes
var quotes = ['I talk a lot, so I’ve learned to tune myself out. – Kelly Kapoor, Season 7, Counseling', 'Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me. – Michael Scott, Season 2, The Fight', 'I’m not superstitious, but I am a little stitious. – Michael Scott, Season 4, Fun Run', 'If I don’t have some cake soon, I might die. – Stanley Hudson, Season 4, Survivor Man', 'The worst thing about prison was the dementors. – Michael Prison Mike Scott, Season 3, The Convict', 'I am running away from my responsibilities. And it feels good. – Michael Scott, Season 4, Money', 'I just want to lie on the beach and eat hot dogs. That’s all I’ve ever wanted. – Kevin Malone, Season 3, Beach Games', 'If I were buying my coffin, I would get one with thicker walls so you couldn’t hear the other dead people. – Dwight Schrute, Season 2, Office Olympics', 'And I knew exactly what to do. But in a much more real sense, I had no idea what to do. – Michael Scott, Season 5, Stress Relief', 'There’s a lot of beauty in ordinary things. Isn’t that kind of the point? – Pam Beesly, Season 9, Finale'];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote-display').innerHTML = quotes[randomNumber];
};

for (var _i = 0; _i < myBoxesLayerThree.length; _i++) {
  myBoxesLayerThree[_i].addEventListener('click', newQuote);
};