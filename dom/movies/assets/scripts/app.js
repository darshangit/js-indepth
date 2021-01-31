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

const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  console.log(movies);
  console.log(movieIndex);

  movies.splice(movieIndex, 1); // Splice manipulates the array
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
  deletMovieModal.classList.remove('visible');
  updateUI();
};

const cancel = function () {
  deletMovieModal.classList.remove('visible');
};

const deleteMovieHandler = (movieId) => {
  deletMovieModal = document.getElementById('delete-modal');
  deletMovieModal.classList.add('visible');
  let confirmDeleteButton = deletMovieModal.querySelector('.btn--danger');

  confirmDeleteButton.replaceWith(confirmDeleteButton.cloneNode(true)); // so that the event listener is garbage collected
  confirmDeleteButton = deletMovieModal.querySelector('.btn--danger');

  confirmDeleteButton.addEventListener(
    'click',
    deleteMovie.bind(null, movieId)
  );

  const cancelDeleteButton = deletMovieModal.querySelector('.btn--passive');
  cancelDeleteButton.removeEventListener('click', cancel);
  cancelDeleteButton.addEventListener('click', cancel);
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
    <img src="${imageUrl}" alt="${title}">
  </div>
  <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
  <div>
  `;

  newMovieElement.addEventListener('click', deleteMovieHandler.bind(this, id));
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

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
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backDropClickHandler);
cancelButton.addEventListener('click', toggleMovieModal);
addButton.addEventListener('click', addMovieHandler);
