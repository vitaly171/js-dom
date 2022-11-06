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
