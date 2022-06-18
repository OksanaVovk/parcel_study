export default class NewApiSearchFilms {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchFilms(languageChoose) {
    const KEY_API = '024bf82d4805f650033dc69997860333';
    // const languageEn = 'en-US';
    // const languageUa = 'uk';

    const festFetch = `https://api.themoviedb.org/3/search/movie?api_key=${KEY_API}&language=${languageChoose}&page=1&include_adult=false&query=${this.searchQuery}&page=${this.page}`;
    const secondFetch = `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY_API}&language=${languageChoose}`;
    console.log(festFetch);
    const dateIds = [festFetch, secondFetch];

    const arrayOfPromises = dateIds.map(async userId => {
      const response = await fetch(`${userId}`);
      return response.json();
    });

    const dates = await Promise.all(arrayOfPromises);
    return dates;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  resetPage() {
    this.page = 1;
  }

  incrementPage() {
    this.page += 1;
  }

  decrementPage() {
    this.page -= 1;
  }

  setPage(newpage) {
    this.page = newpage;
  }
}
