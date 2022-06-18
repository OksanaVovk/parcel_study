export default function createFilmCard(movie) {
  const {
    vote_average,
    vote_count,
    genres,
    original_title,
    title,
    poster_path,
    original_name,
    popularity,
    overview,
    id,
  } = movie;
  console.log(genres);

  return `<div class="about_film-card">
         <img src="https://image.tmdb.org/t/p/w500${poster_path}" class="about_film-img" alt="" loading="lazy" data-id=${id} />
        <div class="about_film-info">
          <h1 class="about_film-name">${title}
          </h1>
          <div class="about_film-item">
          <p class="lng-vote about_film-text">Vote / Votes</p>
          <b class="about_film-date">${vote_average} / ${vote_count}</b>
          </div>
          <div class="about_film-item">
          <p class="lng-popul about_film-text">Popularity</p>
          <b class="about_film-date">${popularity}</b>
          </div>
          <div class="about_film-item">
          <p class="lng-oridg about_film-text">Original Title</p>
          <b class="about_film-date">${
            original_title ? original_title : original_name
          }</b>
          </div>
          <div class="about_film-item">
          <p class="lng-genre about_film-text">Genre</p>
          <b class="about_film-date">${
            genres ? genres.map(genre => genre.name) : ' '
          }</b>
          </div>
          <h2 class="lng-about about_film-pretitle">ABOUT</h2>
          <p class="about_film-overview">${overview}</p>
        </div>
      </div>`;
}
