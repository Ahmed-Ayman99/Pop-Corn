import { useMovies } from "../contexts/MoviesContext";

import Stats from "./Stats";
import WatchedList from "./WatchedList";
import WatchedMovie from "./WatchedMovie";

const MoviesStats = () => {
  const { watchedMovies } = useMovies();

  return (
    <>
      <Stats />

      <WatchedList>
        {watchedMovies.map((movie) => (
          <WatchedMovie movie={movie} key={movie.imdbID} />
        ))}
      </WatchedList>
    </>
  );
};

export default MoviesStats;
