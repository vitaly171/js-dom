// Write a script that will create a separate element for each element of the ingredients array
// li, after which it will insert all li in one operation into the ul.ingredients.
// Use document.createElement() to create DOM nodes.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Greens',
  'Spices',
];

const contentEl = document.querySelector('#ingredients');
const ingredient = ingredients.map(el => {
  const ingredientName = document.createElement('li');
  ingredientName.textContent = el;
  return ingredientName;
});
contentEl.prepend(...ingredient);

contentEl.classList.add('contaentEl');

const ingrList = document.querySelectorAll('li').forEach(el => {
  return el.classList.add('list__task2');
});

const returnLink = document.querySelector('a');
returnLink.classList.add('return');

const p = document.querySelector('p');
p.classList.add('p');
