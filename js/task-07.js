// Write a script that reacts to a value change
// input#font - size - control(input event) and changes inline
// - style span#text by updating the font - size property.
// As a result, when dragging the slider, the text size will change.

const returnLink = document.querySelector('a');
const p = document.querySelector('p');

returnLink.classList.add('return');
p.classList.add('p');

const inputControler = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputControler.addEventListener('input', () => {
  textRef.style.fontSize = inputControler.value + 'px';
});
