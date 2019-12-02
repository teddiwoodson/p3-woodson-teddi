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
  const changeColorTwo = () => this.classList.toggle('red');

  for (let i = 0; i < Number(this.textContent) * 2; i++) {
    setTimeout(changeColorTwo, i * 1000);
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
  setTimeout(swap, Number(this.textContent) * 2 * 1000);
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
};

for (let i = 0; i < myBoxesLayerTwo.length; i++) {
  myBoxesLayerTwo[i].addEventListener('click', loopThroughTwo);
  myBoxesLayerTwo[i].addEventListener('click', changeLayerTwo);
};

for (let i = 0; i < myBoxesLayerThree.length; i++) {
  myBoxesLayerThree[i].addEventListener('click', changeLayerThree);
};

//quotes
let quotes = [
  'Im sorry that people are so jealous of me. But I cant help it that Im popular. — Gretchen Wieners',
  'Four for you Glen Coco! You go, Glen Coco! — Damian',
  'That is so fetch! — Gretchen Wieners',
  'You wanna do something fun? Wanna go to Taco Bell? — Karen Smith',
  'So you have your cousins, and then you have your first cousins, and then you have your second cousins... — Karen Smith',
  'You cant sit with us! — Gretchen Wieners',
  'Theres a 30 percent chance that its already raining. — Karen Smith',
  'On Wednesdays we wear pink! — Karen Smith',
  'Its not my fault youre, like, in love with me or something! — Cady Heron',
  'Im not like a regular mom, Im a cool mom! — Mrs. George',
  'Get in loser, were going shopping. — Regina George',
  'Thats why her hair is so big. Its full of secrets. — Damian',
  'I cant go out tonight *fake coughs*. Im sick. — Karen Smith',
  'Im a mouse, duh! — Karen Smith',
  'She doesnt even go here! — Damian',
  'Is butter a carb? — Regina George',
  'Your moms chest hair! — Janis Ian',
  'I wish we could all get along like we used to in middle school. I wish I could bake a cake filled with rainbows and smiles and everyone would eat and be happy. — Crying Girl',
  'The limit does not exist. — Cady Heron',
  'Yo, yo, yo. All you sucka MCs aint got nothing on me. — Kevin G',
  'Raise your hand if you have ever been personally victimized by Regina George. — Ms. Norbury',
  'There are two kinds of evil people in this world. Those who do evil stuff and those who see evil stuff being done and dont try to stop it. — Janis Ian',


]

function newQuote(){
  let randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quote-display').innerHTML= quotes[randomNumber];
};

for (let i = 0; i < myBoxesLayerThree.length; i++) {
  myBoxesLayerThree[i].addEventListener('click', newQuote);
};
