import { BsHourglassSplit } from "react-icons/bs";
import { HiStar } from "react-icons/hi2";

import { useMovies } from "../contexts/MoviesContext";
import StatsItem from "./StatsItem";

const Stats = () => {
  const { watchedMovies } = useMovies();

  const makeReducer = (arr, field) => {
    const reduce = arr.reduce((acc, item) => (acc += Number(item[field])), 0);
    return reduce;
  };

  const moviesLenth = watchedMovies.length;
  const userRatings =
    Math.round((makeReducer(watchedMovies, "userRating") / moviesLenth) * 10) /
      10 || 0;

  const imdbRatings =
    Math.round((makeReducer(watchedMovies, "imdbRating") / moviesLenth) * 10) /
      10 || 0;

  const runTtimes = Math.round(makeReducer(watchedMovies, "runtime")) || 0;

  return (
    <div className="summary">
      <h3>stats of movies tou watched</h3>
      <div className="stats">
        <StatsItem label={`${moviesLenth} movies`}>#️⃣</StatsItem>
        <StatsItem label={userRatings}>
          <HiStar />
        </StatsItem>
        <StatsItem label={imdbRatings}>
          <HiStar />
        </StatsItem>

        <StatsItem label={`${runTtimes} min`}>
          <BsHourglassSplit />
        </StatsItem>
      </div>
    </div>
  );
};

export default Stats;
