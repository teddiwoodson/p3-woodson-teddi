//Global Varibales
const myBoxes = document.getElementsByClassName('block');
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

//The Event Listener
for (let i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
};
