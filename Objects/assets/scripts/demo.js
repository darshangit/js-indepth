'use strict';
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    if (!('info' in movie)) {
      // to check if the value object has a values or if(movie.info === undefined)
    }
    const { info, ...otherProps } = movie; // object destructuring
    // const { title: movieTitle } = info; // the title is saved in movieTitle ( if we want to change the title naming)
    let { getFormattedTitle } = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie);
    let text = getFormattedTitle.call(movie) + '-'; //can use apply - it will use the second parameter as array arguments
    for (const key in info) {
      if (key !== 'title') {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (extraName.trim() === '' || extraValue.trim() === '') {
    return;
  }

  const newMovie = {
    info: {
      set title(value) {
        if (value.trim() === '') {
          this._title = 'DEFAULT';
          return;
        }
        this._title = value;
      },
      get title() {
        return this._title;
      },
      // title, // same as title:title
      [extraName]: extraValue,
    },
    id: Math.random(),
    getFormattedTitle() {
      // console.log(this);
      return this.info.title.toUpperCase();
    },
  };

  newMovie.info.title = title;

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
