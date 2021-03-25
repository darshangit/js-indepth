// import 'core-js/features/promise';

const { result } = require('lodash');

const button = document.querySelector('button');
const textparagraph = document.querySelector('p');

button.addEventListener('click', () => {
  const text = textparagraph.textContent;
  const promise = new Promise();
  console.log(promise);
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
