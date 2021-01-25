const addMovieModal = document.getElementById('add-modal');

const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelButton = addMovieModal.querySelector('.btn--passive');
const addButton = addMovieModal.querySelector('.btn--success');

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackDrop();
};

const toggleBackDrop = () => {
  backdrop.classList.toggle('visible');
};

const backDropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backDropClickHandler);
cancelButton.addEventListener('click', toggleMovieModal);

console.log(addMovieModal);
