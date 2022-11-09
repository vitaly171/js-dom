// Use an array of images objects to create nested img tags in li.
// Use template strings and insertAdjacentHTML() to create markup.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('#gallery');

const markup = images
  .map(el => {
    return `<li> <img src=${el.url} alt= '${el.alt}'></li>`;
  })
  .join('');

galleryEl.insertAdjacentHTML('afterbegin', markup);

galleryEl.classList.add('gallery');

const listRef = document.querySelectorAll('li').forEach(el => {
  return el.classList.add('list__task3');
});

const imgRef = document.querySelectorAll('img').forEach(el => {
  return el.classList.add('img__task3');
});

const returnLink = document.querySelector('a');
returnLink.classList.add('return');

const p = document.querySelector('p');
p.classList.add('p');
