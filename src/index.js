const KEY_API = '024bf82d4805f650033dc69997860333';
async function fetchFilmsCards() {
  const festFetch =
    'https://api.themoviedb.org/3/trending/all/day?api_key=024bf82d4805f650033dc69997860333';
  const secondFetch =
    'https://api.themoviedb.org/3/genre/movie/list?api_key=024bf82d4805f650033dc69997860333&language=en-US';
  const userIds = [festFetch, secondFetch];

  const arrayOfPromises = userIds.map(async userId => {
    const response = await fetch(`${userId}`);
    return response.json();
  });

  const users = await Promise.all(arrayOfPromises);
  return users;
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

function fetchAllFilms() {
  return fetch(
    'https://api.themoviedb.org/3/trending/all/day?api_key=024bf82d4805f650033dc69997860333'
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

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
      const users = await fetchFilmsCards();
      console.log(users);
      const markup = randerFilms(users);
      filmsContainer.insertAdjacentHTML('beforebegin', markup);
    } catch (error) {
      console.log(error.message);
    }
  }
);

function randerFilms(users) {
  const filmArray = users[0].results;
  const genreArray = users[1].genres;

  function list(array) {
    genreArray.reduce((listGenre, genre) => {
      console.log(genre.id);
      if (array.includes(genre.id)) {
        listGenre.push(genre.name);
        return listGenre;
      }
    }, []);
  }

  console.log(filmArray);
  console.log(genreArray);
  // console.log(genreFilms);
  return filmArray
    .map(
      ({
        original_title,
        poster_path,
        original_name,
        genre_ids,
        release_date,
        first_air_date,
      }) => {
        console.log(`${original_title}`);
        return `<div class="film-card">
        <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="" loading="lazy" />
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
            <b>||</b>
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
