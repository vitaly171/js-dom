// Write a script that, when focus is lost on an input,
// checks its contents for the correct number of characters.
const inputRef = document.querySelector('#validation-input');
const returnLink = document.querySelector('a');
const p = document.querySelector('p');

inputRef.classList.add('validation-input');

const validation = () => {
  if (inputRef.value.length === 6) {
    inputRef.classList.remove('invalid');
    return inputRef.classList.add('valid');
  }
  if (inputRef.value.length === 0) {
    inputRef.classList.remove('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
};

inputRef.addEventListener('blur', validation);

returnLink.classList.add('return');
p.classList.add('p');
