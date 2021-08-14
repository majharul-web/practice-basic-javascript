// onclick function
function makeRed() {
  document.body.style.backgroundColor = 'red';
}

// id diye
const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = 'blue';
}

// anoonimas
const greenButton = document.getElementById('make-green-button');
greenButton.onclick = function () {
  document.body.style.backgroundColor = 'green';
};

// addEvent
const goldenButton = document.getElementById('make-goldenrod-button');
goldenButton.addEventListener('click', makeGold);
function makeGold() {
  document.body.style.backgroundColor = 'goldenrod';
}
// addEvent anno
const orangeButton = document.getElementById('make-orange-button');
orangeButton.addEventListener('click', function () {
  document.body.style.backgroundColor = 'orange';
});

// direct
document.getElementById('make-purple-button').addEventListener('click', function () {
  document.body.style.backgroundColor = 'purple';
});

// tolltip
document.getElementById('tool-tipButton').addEventListener('click', function () {
  const p = document.getElementById('clickingMethod');
  //   p.innerText = 'alaminer biye';
});
// input
document.getElementById('submit-button').addEventListener('click', function () {
  const nameField = document.getElementById('inputText');
  console.log(nameField.value);

  const p = document.getElementById('clickingMethod');
  p.innerText = nameField.value;
  nameField.value = '';
});
