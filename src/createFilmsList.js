import genreLang from './genre';
export default function createFilmsList(dates) {
  const filmArray = dates[0].results;
  const genreArray = dates[1].genres;
  return filmArray
    .map(
      ({
        original_title,
        poster_path,
        original_name,
        genre_ids,
        release_date,
        id,
      }) => {
        return `<div class="film-card">
        <img src="https://image.tmdb.org/t/p/w500${poster_path}"  alt="" loading="lazy" data-id=${id} />
        <div class="info">
          <p class="film-name">${
            original_title ? original_title : original_name
          }
          </p>
          <p class="info-item">
            <b class = "lng-other">${genreLang(genreArray, genre_ids)}
           </b >
            <b>|</b>
            <b>${release_date ? release_date.slice(0, 4) : '-'}</b>
          </p>
        </div>
      </div>`;
      }
    )
    .join('');
}
