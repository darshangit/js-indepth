const { result } = require('lodash');

const button = document.querySelector('button');
const textparagraph = document.querySelector('p');

button.addEventListener('click', () => {
  const text = textparagraph.textContent;

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
