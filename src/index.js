import NewApiSearchFilms from './NewApiSearchFilms';
import NewApiPopularFilms from './NewApiPopularFilms';
import createFilmsList from './createFilmsList';
import createFilmCard from './createFilmCard';
import fetchFilmModal from './fetchFilmModal';
const KEY_API = '024bf82d4805f650033dc69997860333';
import Typed from 'typed.js';

const newApiSearchFilm = new NewApiSearchFilms();
const newApiPopularFilms = new NewApiPopularFilms();

const btn = document.querySelector('.button_all');
const filmsContainer = document.querySelector('.films_all');
const backdropEl = document.querySelector('.backdrop');
const modalFilmInfoEl = document.querySelector('.modal_film-info');
const btnModal = document.querySelector('.modal__button--close');
const formEl = document.querySelector('.search-form');
const paginationEl = document.querySelector('.pagination');

btn.addEventListener('click', startPopularFilms);

async function startPopularFilms() {
  clearFilmsContainer();
  newApiPopularFilms.resetPage();
  try {
    const dates = await newApiPopularFilms.fetchFilms();
    console.log(dates);
    const count_pages = dates[0].total_pages;
    console.log(count_pages);
    const markupPages = createPagesList(count_pages);
    paginationEl.innerHTML = markupPages;
    paginationEl.firstChild.classList.add('is-hidden');
    paginationEl.children[newApiPopularFilms.page].classList.add('active');
    const markup = createFilmsList(dates);
    filmsContainer.insertAdjacentHTML('afterbegin', markup);
  } catch (error) {
    console.log(error.message);
  }
  paginationEl.removeEventListener('click', onPaginationClickSearch);
  paginationEl.addEventListener('click', onPaginationClickPopul);
}

filmsContainer.addEventListener('click', onFilmClick);
btnModal.addEventListener('click', onBtnModalClick);

function onFilmClick(event) {
  modalFilmInfoEl.innerHTML = '';
  console.log(event.target);
  console.log(event.currentTarget);
  if (!event.target.dataset.id) {
    return;
  } else {
    console.log(event.target.dataset.id);
    fetchFilmModal(event.target.dataset.id)
      .then(movie => {
        console.log(movie);
        if (!movie) {
          return alert('The resource you requested could not be found.');
        } else {
          addBtn.setAttribute('data-id', `${movie.id}`);
          queueBtn.setAttribute('data-id', `${movie.id}`);
          const markup = createFilmCard(movie);
          backdropEl.classList.remove('is-hidden');
          backdropEl.addEventListener('click', onBackdropClick);
          document.addEventListener('keydown', onEscKeyPress);
          document.body.classList.toggle('modal-open');
          modalFilmInfoEl.insertAdjacentHTML('beforeend', markup);
        }
      })
      .catch(error => console.log(error));
  }
}

function onBtnModalClick() {
  backdropEl.classList.add('is-hidden');
  document.body.classList.toggle('modal-open');
}

function clearFilmsContainer() {
  filmsContainer.innerHTML = '';
}

formEl.addEventListener('submit', onSearchFilm);

function onSearchFilm(event) {
  event.preventDefault();
  clearFilmsContainer();

  newApiSearchFilm.query =
    event.currentTarget.elements.searchQuery.value.trim();
  console.log(newApiSearchFilm.searchQuery);
  if (newApiSearchFilm.query === '') {
    typed();
  }
  newApiSearchFilm.resetPage();

  newApiSearchFilm
    .fetchFilms()
    .then(dates => {
      console.log(dates);
      const filmArray = dates[0].results;
      const genreArray = dates[1].genres;
      console.log(filmArray);
      console.log(genreArray);

      if (filmArray.length === 0) {
        return alert(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else {
        const markup = createFilmsList(dates);
        filmsContainer.insertAdjacentHTML('afterbegin', markup);
        const count_pages = dates[0].total_pages;
        console.log(count_pages);
        const markupPages = createPagesList(count_pages);
        paginationEl.innerHTML = markupPages;
        paginationEl.firstChild.classList.add('is-hidden');
        paginationEl.children[newApiSearchFilm.page].classList.add('active');
      }
    })
    .catch(error => console.log(error));
  paginationEl.removeEventListener('click', onPaginationClickPopul);
  paginationEl.addEventListener('click', onPaginationClickSearch);
}

const ADDTOWATCHED_KEY = 'add-to-watchet-id';
const moviesId = [];

const addBtn = document.querySelector('.modal__button--watched');
const queueBtn = document.querySelector('.modal__button--queue');
addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick(event) {
  console.dir(event.target.dataset.id);
  if (localStorage.getItem(ADDTOWATCHED_KEY)) {
    const parsedMoviesId = JSON.parse(localStorage.getItem(ADDTOWATCHED_KEY));
    parsedMoviesId.push(event.target.dataset.id);
    localStorage.setItem(ADDTOWATCHED_KEY, JSON.stringify(parsedMoviesId));
  } else {
    moviesId.push(event.target.dataset.id);
    localStorage.setItem(ADDTOWATCHED_KEY, JSON.stringify(moviesId));
  }
}

function onBackdropClick() {
  backdropEl.classList.add('is-hidden');
  document.body.classList.toggle('modal-open');
  backdropEl.removeEventListener('click', onBackdropClick);
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    backdropEl.classList.add('is-hidden');
    document.body.classList.toggle('modal-open');
    document.removeEventListener('keydown', onEscKeyPress);
  }
}

function typed() {
  return new Typed('.text_error', {
    strings: [
      'Search result not successful. Enter the correct movie name and ',
      ' ',
    ],
    typeSpeed: 20,
    backSpeed: 20,
    backDelay: 2000,
    showCursor: false,
    loop: true,
    loopCount: 1,
  });
}

function createPagesList(count_pages) {
  const pagesArray = [];
  for (let i = 1; i <= count_pages; i += 1) {
    if (count_pages === 1) {
      pagesArray = [];
    } else if (count_pages <= 10) {
      pagesArray.push(
        `<button type="button" class="btn_page" data-page="${i}">${i}</button>`
      );
    } else {
      count_pages = 10;
      pagesArray.push(
        `<button type="button" class="btn_page" data-page="${i}">${i}</button>`
      );
    }
  }
  pagesArray.unshift(
    `<button type="button" class="arrow_left" data-page="arrow_left">&#129044;</button>`
  );
  pagesArray.push(
    ` <button type="button" class="arrow_right" data-page="arrow_right">&#129046;</button>`
  );
  return pagesArray.join('');
}

async function onPaginationClickPopul(event) {
  clearFilmsContainer();
  const currentPage = event.target.dataset.page;
  console.dir(currentPage);
  console.dir(event.target);

  if (currentPage === 'arrow_left') {
    newApiPopularFilms.decrementPage();
  } else if (currentPage === 'arrow_right') {
    newApiPopularFilms.incrementPage();
  } else {
    newApiPopularFilms.setPage(currentPage);
  }

  if (newApiPopularFilms.page <= 1) {
    newApiPopularFilms.setPage(1);
    paginationEl.firstChild.classList.add('is-hidden');
    paginationEl.lastChild.classList.remove('is-hidden');
  } else if (newApiPopularFilms.page >= paginationEl.children.length - 2) {
    newApiPopularFilms.setPage(paginationEl.children.length - 2);
    paginationEl.firstChild.classList.remove('is-hidden');
    paginationEl.lastChild.classList.add('is-hidden');
  } else {
    paginationEl.firstChild.classList.remove('is-hidden');
    paginationEl.lastChild.classList.remove('is-hidden');
  }

  console.log(newApiPopularFilms.page);
  try {
    const dates = await newApiPopularFilms.fetchFilms();
    console.log(dates);
    const markup = createFilmsList(dates);
    filmsContainer.insertAdjacentHTML('beforeend', markup);
    for (let i = 0; i < paginationEl.children.length; i += 1) {
      paginationEl.children[i].classList.remove('active');
    }
    paginationEl.children[dates[0].page].classList.add('active');
  } catch (error) {
    console.log(error.message);
  }
}

async function onPaginationClickSearch(event) {
  clearFilmsContainer();
  const currentPage = event.target.dataset.page;
  console.dir(currentPage);
  console.dir(event.target);

  if (currentPage === 'arrow_left') {
    newApiSearchFilm.decrementPage();
  } else if (currentPage === 'arrow_right') {
    newApiSearchFilm.incrementPage();
  } else {
    newApiSearchFilm.setPage(currentPage);
  }

  if (newApiSearchFilm.page <= 1) {
    newApiSearchFilm.setPage(1);
    paginationEl.firstChild.classList.add('is-hidden');
    paginationEl.lastChild.classList.remove('is-hidden');
  } else if (newApiSearchFilm.page >= paginationEl.children.length - 2) {
    newApiSearchFilm.setPage(paginationEl.children.length - 2);
    paginationEl.firstChild.classList.remove('is-hidden');
    paginationEl.lastChild.classList.add('is-hidden');
  } else {
    paginationEl.firstChild.classList.remove('is-hidden');
    paginationEl.lastChild.classList.remove('is-hidden');
  }

  console.log(newApiSearchFilm.page);
  try {
    const dates = await newApiSearchFilm.fetchFilms();
    console.log(dates);
    const markup = createFilmsList(dates);
    filmsContainer.insertAdjacentHTML('beforeend', markup);
    for (let i = 0; i < paginationEl.children.length; i += 1) {
      paginationEl.children[i].classList.remove('active');
    }
    paginationEl.children[dates[0].page].classList.add('active');
  } catch (error) {
    console.log(error.message);
  }
}

// async function onPaginationClick(event, object) {
//   clearFilmsContainer();
//   const currentPage = event.target.dataset.page;
//   console.dir(currentPage);
//   console.dir(event.target);

//   if (currentPage === 'arrow_left') {
//     object.decrementPage();
//   } else if (currentPage === 'arrow_right') {
//     object.incrementPage();
//   } else {
//     object.setPage(currentPage);
//   }

//   if (object.page <= 1) {
//     object.setPage(1);
//     paginationEl.firstChild.classList.add('is-hidden');
//     paginationEl.lastChild.classList.remove('is-hidden');
//   } else if (object.page >= paginationEl.children.length - 2) {
//     object.setPage(paginationEl.children.length - 2);
//     paginationEl.firstChild.classList.remove('is-hidden');
//     paginationEl.lastChild.classList.add('is-hidden');
//   } else {
//     paginationEl.firstChild.classList.remove('is-hidden');
//     paginationEl.lastChild.classList.remove('is-hidden');
//   }

//   console.log(newApiSearchFilm.page);
//   try {
//     const dates = await object.fetchFilms();
//     console.log(dates);
//     const markup = createFilmsList(dates);
//     filmsContainer.insertAdjacentHTML('beforeend', markup);
//     for (let i = 0; i < paginationEl.children.length; i += 1) {
//       paginationEl.children[i].classList.remove('active');
//     }
//     paginationEl.children[dates[0].page].classList.add('active');
//   } catch (error) {
//     console.log(error.message);
//   }
// }
