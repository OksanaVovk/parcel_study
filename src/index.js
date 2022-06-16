import NewApiSearchFilms from './NewApiSearchFilms';
import NewApiPopularFilms from './NewApiPopularFilms';
import createFilmsList from './createFilmsList';
import createFilmCard from './createFilmCard';
import fetchFilmModal from './fetchFilmModal';
const KEY_API = '024bf82d4805f650033dc69997860333';
import Typed from 'typed.js';

// async function fetchFilmModal(movie_id) {
//   const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${KEY_API}`;
//   console.log(url);
//   const response = await fetch(url);
//   const movie = await response.json();
//   return movie;
// }

const newApiSearchFilm = new NewApiSearchFilms();
const newApiPopularFilms = new NewApiPopularFilms();

const btn = document.querySelector('.button_all');
const filmsContainer = document.querySelector('.films_all');
const backdropEl = document.querySelector('.backdrop');
const modalFilmInfoEl = document.querySelector('.modal_film-info');
const btnModal = document.querySelector('.modal__button--close');
const formEl = document.querySelector('.search-form');

btn.addEventListener('click', startPopularFilms);

async function startPopularFilms() {
  clearFilmsContainer();
  newApiPopularFilms.resetPage();
  try {
    const dates = await newApiPopularFilms.fetchFilmsCards();
    console.log(dates);
    const count_pages = dates[0].total_pages;
    console.log(count_pages);
    createPagesList(count_pages);
    const markup = createFilmsList(dates);
    filmsContainer.insertAdjacentHTML('afterbegin', markup);
  } catch (error) {
    console.log(error.message);
  }
}

// function createFilmsList(dates) {
//   const filmArray = dates[0].results;
//   const genreArray = dates[1].genres;
//   return filmArray
//     .map(
//       ({
//         original_title,
//         poster_path,
//         original_name,
//         genre_ids,
//         release_date,
//         id,
//       }) => {
//         return `<div class="film-card">
//         <img src="https://image.tmdb.org/t/p/w500${poster_path}"  alt="" loading="lazy" data-id=${id} />
//         <div class="info">
//           <p class="film-name">${
//             original_title ? original_title : original_name
//           }
//           </p>
//           <p class="info-item">
//             <b>${genreArray
//               .reduce((listGenre, genre) => {
//                 if (genre_ids.includes(genre.id)) {
//                   listGenre.push(` ${genre.name}`);
//                 }
//                 return listGenre;
//               }, [])
//               .slice(0, 2)
//               .concat([' Other'])} </b >
//             <b>|</b>
//             <b>${release_date ? release_date.slice(0, 4) : '-'}</b>
//           </p>
//         </div>
//       </div>`;
//       }
//     )
//     .join('');
// }

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

// function createFilmCard(movie) {
//   const {
//     vote_average,
//     vote_count,
//     genres,
//     original_title,
//     poster_path,
//     original_name,
//     popularity,
//     overview,
//     id,
//   } = movie;
//   console.log(genres);

//   return `<div class="about_film-card">
//          <img src="https://image.tmdb.org/t/p/w500${poster_path}" class="about_film-img" alt="" loading="lazy" data-id=${id} />
//         <div class="about_film-info">
//           <h1 class="about_film-name">${
//             original_title ? original_title : original_name
//           }
//           </h1>
//           <div class="about_film-item">
//           <p class="about_film-text">Vote / Votes</p>
//           <b class="about_film-date">${vote_average} / ${vote_count}</b>
//           </div>
//           <div class="about_film-item">
//           <p class="about_film-text">Popularity</p>
//           <b class="about_film-date">${popularity}</b>
//           </div>
//           <div class="about_film-item">
//           <p class="about_film-text">Original Title</p>
//           <b class="about_film-date">${
//             original_title ? original_title : original_name
//           }</b>
//           </div>
//           <div class="about_film-item">
//           <p class="about_film-text">Genre</p>
//           <b class="about_film-date">${
//             genres ? genres.map(genre => genre.name) : ' '
//           }</b>
//           </div>
//           <h2 class="about_film-pretitle">ABOUT</h2>
//           <p class="about_film-overview">${overview}</p>
//         </div>
//       </div>`;
// }

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
    .searchFilm()
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
      }
    })
    .catch(error => console.log(error));
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

const arrowleftEl = document.querySelector('.arrow_left');
const paginationEl = document.querySelector('.pagination');
const pagesArray = [];

function createPagesList(count_pages) {
  for (let i = 1; i <= count_pages; i += 1) {
    if (count_pages === 1) {
      return;
    } else if (count_pages <= 20) {
      pagesArray.push(`<li class="item_page" data-page="${i}">${i}</li>`);
    } else {
      count_pages = 20;
      pagesArray.push(`<li class="item_page" data-page="${i}">${i}</li>`);
    }
  }
  paginationEl.classList.remove('is-hidden');
  return arrowleftEl.insertAdjacentHTML('afterend', pagesArray.join(''));
}

paginationEl.addEventListener('click', onPaginationClick);

async function onPaginationClick(event) {
  clearFilmsContainer();
  console.dir(event.target.dataset.page);
  console.dir(event.target);
  event.target.style.color = 'orange';
  newApiPopularFilms.setPage(event.target.dataset.page);
  console.log(newApiPopularFilms.page);
  try {
    const dates = await newApiPopularFilms.fetchFilmsCards();
    console.log(dates);
    const markup = createFilmsList(dates);
    filmsContainer.insertAdjacentHTML('afterbegin', markup);
  } catch (error) {
    console.log(error.message);
  }
}
