// Write a script that, when typing in the input
// input#name - input(input event), substitutes its current value
// in span#name - output. If the input is empty,
// the span should display the string 'stranger'.

const returnLink = document.querySelector('a');
const p = document.querySelector('p');

returnLink.classList.add('return');
p.classList.add('p');

const input = document.querySelector('#name-input');
let outputName = document.querySelector('#name-output');
const btnClean = document.querySelector('#clean-input');
console.log(btnClean);
input.addEventListener('input', ewt => {
  if (input.value === '') {
    outputName.textContent = 'stranger';
  } else {
    outputName.textContent = ewt.target.value;
  }
});

function clean() {
  input.value = '';
  outputName.textContent = 'stranger';
}

btnClean.addEventListener('click', () => {
  clean();
});
