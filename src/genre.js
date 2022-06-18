export default function genreLang(genreArray, genre_ids) {
  let hash = window.location.hash;
  hash = hash.substring(1);
  if (hash === 'en') {
    return genreArray
      .reduce((listGenre, genre) => {
        if (genre_ids.includes(genre.id)) {
          listGenre.push(` ${genre.name}`);
        }
        return listGenre;
      }, [])
      .slice(0, 2)
      .concat([' Other']);
  } else {
    return genreArray
      .reduce((listGenre, genre) => {
        if (genre_ids.includes(genre.id)) {
          listGenre.push(` ${genre.name}`);
        }
        return listGenre;
      }, [])
      .slice(0, 2)
      .concat([' Інші']);
  }
}
