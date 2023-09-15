// eslint-disable-next-line react-refresh/only-export-components
export async function getMovies() {
  const apiKey = "18dab7a6e93537b5a63a9c58c914d580";

  const movies = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
  )
    .then((response) => response.json())
    .then((moviesData) => moviesData.results)
    .catch((error) => {
      console.log(error);
    });

  return movies;
}

getMovies();

// eslint-disable-next-line react-refresh/only-export-components
export async function getMoviebyId(id) {
  const movies = await getMovies();
  const movie = movies.find((contact) => contact.id === id);

  return movie ?? null;
}
