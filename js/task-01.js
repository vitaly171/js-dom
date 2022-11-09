const refItems = document.querySelectorAll('.item');

console.log(`There are ${refItems.length} categories in this list.`);

refItems.forEach(elem =>
  console.log(
    `Category ${elem.firstElementChild.textContent} has ${elem.lastElementChild.children.length} nested elements`,
  ),
);

const returnLink = document.querySelector('a');
returnLink.classList.add('return');

const p = document.querySelector('p');
p.classList.add('p');
