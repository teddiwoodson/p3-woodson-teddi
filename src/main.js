//Global Varibales
//Layer one
const layerOne = document.getElementById('layer-one');
const myBoxes = document.getElementsByClassName('block');

//Layer two
const layerTwo = document.getElementById('layer-two');
const myBoxesLayerTwo = document.getElementsByClassName('block-2');
const myBoxesLayerThree = document.getElementsByClassName('block-3');

//The Functionality
function loopThrough() {

  const changeColor = () => {
    this.classList.toggle('red');
  };

  for (let i = 0; i < this.textContent.length * 2; i++) {
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

//The Event Listener
for (let i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
  myBoxes[i].addEventListener('click', changeLayer);
};
