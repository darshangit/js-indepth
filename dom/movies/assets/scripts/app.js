const addMovieModal = document.getElementById('add-modal');

const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelButton = addMovieModal.querySelector('.btn--passive');
const addButton = cancelButton.nextElementSibling;
const inputElements = addMovieModal.querySelectorAll('input');
const entryTextSelection = document.getElementById('entry-text');
const movies = [];

const updateUI = () => {
  if (movies.length) {
    entryTextSelection.style.display = 'none';
  } else {
    entryTextSelection.style.display = 'block';
  }
};

const renderNewMovieElement = () => {};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackDrop();
  clearMovieInput();
};

const toggleBackDrop = () => {
  backdrop.classList.toggle('visible');
};

const backDropClickHandler = () => {
  toggleMovieModal();
};

const clearMovieInput = () => {
  for (const userInput of inputElements) {
    userInput.value = '';
  }
};

const addMovieHandler = () => {
  const titleValue = inputElements[0].value;
  const imageUrlValue = inputElements[1].value;
  const ratingValue = inputElements[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1
  ) {
    alert('Please enter valid values');
    return;
  }

  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearMovieInput();
  updateUI();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backDropClickHandler);
cancelButton.addEventListener('click', toggleMovieModal);
addButton.addEventListener('click', addMovieHandler);
