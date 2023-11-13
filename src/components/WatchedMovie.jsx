import { BsHourglassSplit } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiStar } from "react-icons/hi2";

import { useMovies } from "../contexts/MoviesContext";
import StatsItem from "./StatsItem";

const WatchedMovie = ({ movie }) => {
  const {
    imdbID: movieId,
    Title: title,
    Poster: poster,
    runtime,
    imdbRating,
    userRating,
  } = movie;

  const { setWatchedMovies } = useMovies();

  const handleDeleteMovie = () => {
    setWatchedMovies((prev) =>
      prev.filter((movie) => movie.imdbID !== movieId)
    );
  };

  return (
    <li>
      <img src={poster} alt={title} />
      <h3>{title}</h3>

      <div>
        <StatsItem label={imdbRating}>
          <HiStar />
        </StatsItem>

        <StatsItem label={userRating}>
          <HiStar />
        </StatsItem>

        <StatsItem label={runtime}>
          <BsHourglassSplit />
        </StatsItem>

        <StatsItem>
          <AiFillCloseCircle onClick={handleDeleteMovie} className="red-icon" />
        </StatsItem>
      </div>
    </li>
  );
};

export default WatchedMovie;
