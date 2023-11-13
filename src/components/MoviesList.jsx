import { useMovies } from "../contexts/MoviesContext";
import { useMovie } from "../contexts/MovieContext";

import Loadding from "./Loadding";
import Error from "./Error";
import Movie from "./Movie";

const MoviesList = () => {
  const { movies, isLoading, error } = useMovies();
  const { selectedId } = useMovie();

  if (error) return <Error message={error} />;
  if (isLoading) return <Loadding />;

  if (movies === undefined || movies?.length === 0 || !movies)
    return <p className="search-placeholder">Search for movies</p>;

  return (
    <ul className="list list-movies">
      {movies.map((movie) => (
        <Movie
          selected={selectedId === movie.imdbID}
          movie={movie}
          key={movie.imdbID}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
