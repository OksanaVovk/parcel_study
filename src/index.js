const KEY_API = '024bf82d4805f650033dc69997860333';
async function fetchFilmsCards() {
  const festFetch =
    'https://api.themoviedb.org/3/trending/movie/day?api_key=024bf82d4805f650033dc69997860333';
  const secondFetch =
    'https://api.themoviedb.org/3/genre/movie/list?api_key=024bf82d4805f650033dc69997860333&language=en-US';
  const dateIds = [festFetch, secondFetch];

  const arrayOfPromises = dateIds.map(async userId => {
    const response = await fetch(`${userId}`);
    return response.json();
  });

  const dates = await Promise.all(arrayOfPromises);
  return dates;
}

async function fetchFilmModal(movie_id) {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=024bf82d4805f650033dc69997860333&language=en-US`;
  console.log(url);
  const response = await fetch(url);
  const movie = await response.json();
  return movie;
}

// async function fetchgenre() {
//   const response = await fetch(
//     'https://api.themoviedb.org/3/genre/movie/list?api_key=024bf82d4805f650033dc69997860333&language=en-US'
//   );
//   const genresJson = await response.json();
//   return genresJson;
// }

// let geners;

// const doStuff = async () => {
//   try {
//     geners = await fetchgenre();
//     console.log(geners);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// doStuff();

// function fetchAllFilms() {
//   return fetch(
//     'https://api.themoviedb.org/3/trending/all/day?api_key=024bf82d4805f650033dc69997860333'
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function genreFilms() {
//   return fetch(
//     'https://api.themoviedb.org/3/genre/movie/list?api_key=024bf82d4805f650033dc69997860333&language=en-US'
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// genreFilms()
//   .then(genres => {
//     console.log(genres);
//   })
//   .catch(error => console.log(error));

const btn = document.querySelector('.button_all');
const filmsContainer = document.querySelector('.films_all');
const backdropEl = document.querySelector('.backdrop');
const modalFilmInfoEl = document.querySelector('.modal_film-info');
const btnModal = document.querySelector('.modal__button--close');

btn.addEventListener(
  'click',
  // () => {
  //   fetchAllFilms()
  //     .then(films => {
  //       const markup = randerFilms(films);
  //       filmsContainer.insertAdjacentHTML('beforebegin', markup);
  //     })
  //     .catch(error => console.log(error));
  async () => {
    try {
      const dates = await fetchFilmsCards();
      console.log(dates);
      const markup = createFilmsList(dates);
      filmsContainer.insertAdjacentHTML('afterbegin', markup);
    } catch (error) {
      console.log(error.message);
    }
  }
);

function createFilmsList(dates) {
  const filmArray = dates[0].results;
  const genreArray = dates[1].genres;
  console.log(filmArray);
  console.log(genreArray);

  return filmArray
    .map(
      ({
        original_title,
        poster_path,
        original_name,
        genre_ids,
        release_date,
        first_air_date,
        id,
      }) => {
        // console.log(`${original_title}`);
        return `<div class="film-card">
        <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="" loading="lazy"  data-id=${id} />
        <div class="info">
          <p class="film-name">${
            original_title ? original_title : original_name
          }
          </p>
          <p class="info-item">
            <b>${genreArray.reduce((listGenre, genre) => {
              if (genre_ids.includes(genre.id)) {
                listGenre.push(` ${genre.name}`);
              }
              return listGenre;
            }, [])}</b>
            <b>|</b>
            <b>${
              release_date
                ? release_date.slice(0, 4)
                : first_air_date.slice(0, 4)
            }</b>
          </p>
        </div>
      </div>`;
      }
    )
    .join('');
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
          const markup = createFilmCard(movie);
          backdropEl.classList.remove('is-hidden');
          modalFilmInfoEl.insertAdjacentHTML('beforeend', markup);
        }
      })
      .catch(error => console.log(error));
  }
}

function createFilmCard(movie) {
  const {
    vote_average,
    vote_count,
    genres,
    original_title,
    poster_path,
    original_name,
    popularity,
    overview,
  } = movie;
  console.log(genres);

  return `<div class="about_film-card">
        <img src="https://image.tmdb.org/t/p/w500${poster_path}" class="about_film-img" alt="" loading="lazy"  />
        <div class="about_film-info">
          <h1 class="about_film-name">${
            original_title ? original_title : original_name
          }
          </h1>
          <div class="about_film-item">
          <p class="about_film-text">Vote / Votes</p>
          <b class="about_film-date">${vote_average} / ${vote_count}</b>
          </div>
          <div class="about_film-item">
          <p class="about_film-text">Popularity</p>
          <b class="about_film-date">${popularity}</b>
          </div>
          <div class="about_film-item">
          <p class="about_film-text">Original Title</p>
          <b class="about_film-date">${
            original_title ? original_title : original_name
          }</b>
          </div>
          <div class="about_film-item">
          <p class="about_film-text">Genre</p>
          <b class="about_film-date">${
            genres ? genres.map(genre => genre.name) : ' '
          }</b>
          </div>
          <h2 class="about_film-pretitle">ABOUT</h2>
          <p class="about_film-overview">${overview}</p>
        </div>
      </div>`;
}

function onBtnModalClick() {
  // filmsContainer.removeEventListener('click', onFilmClick);
  backdropEl.classList.add('is-hidden');
}
