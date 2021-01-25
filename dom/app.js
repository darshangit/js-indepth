// const ul = document.body.firstElementChild.nextElementSibling;
// const firstUl = ul.firstElementChild;

// console.log(firstUl);

const ul = document.querySelector('ul');
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

  //ul.innerHTML = ul.innerHTML + '<li>Abc</li>'; // will re-render the whole ul
  //ul.insertAdjacentHTML('beforeend', '<li> awesome </li>'); // downside is no direct access to the added element
  const li = document.createElement('li');
  li.className = 'list-item';
  li.textContent = 'item 4';

  const l2 = document.createElement('li');
  l2.className = 'list-item';
  l2.textContent = 'item 5';

  // ul.append(l2);
  // ul.prepend(li); // firstelement

  // ul.firstElementChild.before(l1);
  // ul.lastElementChild.after(l2);
  // ul.lastElementChild.replaceWith(l2); // not supported on IE and Safari

  const l3 = li.cloneNode(false); // true - will clone all the nested and descendents
  l3.textContent = 'Item new';

  ul.insertAdjacentElement('beforeend', l3); // better browser support
  ul.insertAdjacentElement('beforeend', l2); // better browser support
});

const li = ul.getElementsByTagName('li');
console.log(li); // this will always show live updated array - after addition too
//queryselection gives a snapshot
const newLi = li[0].cloneNode(true);
ul.append(newLi);

newLi.removeChild(); // IE doesnt support
//safest way to remove
newLi.parentElement.removeChild(newLi);
