//Global Varibales
//Layer one
const layerOne = document.getElementById('layer-one');
const myBoxes = document.getElementsByClassName('block');

//Layer two
const layerTwo = document.getElementById('layer-two');
const myBoxesLayerTwo = document.getElementsByClassName('block-2');

//Layer three
const layerThree = document.getElementById('layer-three');
const myBoxesLayerThree = document.getElementsByClassName('block-3');

//LayerFour
const layerFour = document.getElementById('layer-four');

//The Functionality
function loopThrough() {
  const changeColor = () => {
    this.classList.toggle('red');
  };
  for (let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};

function loopThroughTwo() {
  const changeColor = () => {
    this.classList.toggle('red');
  };
  for (let i = 0; i < parseInt(this.textContent) * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};

function changeLayer() {
  const swap = () => {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  }
  setTimeout(swap, this.textContent.length * 2 * 1000);
};

function changeLayerTwo() {
  const swap = () => {
    layerTwo.classList.add('hide');
    layerThree.classList.remove('hide');
  }
  setTimeout(swap, this.textContent.length * 2 * 1000);
};

function changeLayerThree() {
  const swap = () => {
    layerThree.classList.add('hide');
    layerFour.classList.remove('hide');
  }
  setTimeout(swap, 500);
};


//The Event Listener
for (let i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
  myBoxes[i].addEventListener('click', changeLayer);
  myBoxesLayerTwo[i].addEventListener('click', loopThroughTwo);
  myBoxesLayerTwo[i].addEventListener('click', changeLayerTwo);
  myBoxesLayerThree[i].addEventListener('click', changeLayerThree);
};

//quotes
let quotes = [
  'this is quote 1',
  'this is quote 2',
  'this is quote 3',
  'this is quote 4',
  'this is quote 5',
  'this is quote 6',
  'this is quote 7',
  'this is quote 8',
  'this is quote 9',
  'this is quote 10'
]

function newQuote(){
  let randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quote-display').innerHTML= quotes[randomNumber];
};

for (let i = 0; i < myBoxesLayerThree.length; i++) {
  myBoxesLayerThree[i].addEventListener('click', newQuote);
};
