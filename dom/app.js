const ul = document.body.firstElementChild.nextElementSibling;
const firstUl = ul.firstElementChild;

console.log(firstUl);

const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = 'pink';
// section.className = '';
console.log(section);

button.addEventListener('click', () => {
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }

  section.classList.toggle('invisible'); // beauty
});
