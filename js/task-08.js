const returnLink = document.querySelector('a');
const p = document.querySelector('p');

returnLink.classList.add('return');
p.classList.add('p');

const divRef = document.querySelector('#boxes');
const inputRef = document.querySelector('input');
const createRef = document.querySelector('[data-action="render"]');
const removeRef = document.querySelector('[data-action="destroy"]');

createRef.classList.add('btn_create_task8');
removeRef.classList.add('btn_remove_task8');

console.log(inputRef);
let increase = 30;

inputRef.addEventListener('input', () => {});

createRef.addEventListener('click', () => {
  createBoxes(inputRef.valueAsNumber);
});
removeRef.addEventListener('click', () => {
  removeBoxes();
  console.log('remove');
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const boxElement = document.createElement('div');
    boxElement.style.margin = '5px';
    boxElement.style.backgroundColor = `rgb(
      ${Math.round(Math.random() * 255)}, 
      ${Math.round(Math.random() * 255)}, 
      ${Math.round(Math.random() * 255)})`;
    boxElement.style.width = `${increase}px`;
    boxElement.style.height = `${increase}px`;
    increase += 10;

    divRef.appendChild(boxElement);
  }
}

function removeBoxes() {
  divRef.innerHTML = '';
}
