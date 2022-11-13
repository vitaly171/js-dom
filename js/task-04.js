// The counter consists of a span and buttons that should increase and
// decrement the counter value by 1.

// Create a counterValue variable that will store the current value of the counter.
// Create increment and decrement functions to increment and decrement the counter value
// Add button click listeners, function calls, and UI updates

const counterValue = document.querySelector('#value');
const buttonInc = document.querySelector('[data-action="increment"]');
const buttonDec = document.querySelector('[data-action="decrement"]');
const buttonReset = document.querySelector('[data-action="reset"]');
const returnLink = document.querySelector('a');
const p = document.querySelector('p');

returnLink.classList.add('return');
p.classList.add('p');

let counterRef = 0;

function increment() {
  counterRef += 1;
  counterValue.textContent = counterRef;
}
function decrement() {
  counterRef -= 1;
  counterValue.textContent = counterRef;
}
function reset() {
  counterRef = 0;
  counterValue.textContent = counterRef;
}

buttonDec.addEventListener('click', () => {
  decrement();
});

buttonInc.addEventListener('click', () => {
  increment();
});

buttonReset.addEventListener('click', () => {
  reset();
});

buttonDec.classList.add('btnDec');
buttonInc.classList.add('btnInc');
buttonReset.classList.add('btnReset');
