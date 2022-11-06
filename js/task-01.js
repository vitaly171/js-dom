const refItems = document.querySelectorAll('.item');

console.log(`There are ${refItems.length} categories in this list.`);

refItems.forEach(elem =>
  console.log(
    `Category ${elem.firstElementChild.textContent} has ${elem.lastElementChild.children.length} nested elements`,
  ),
);
