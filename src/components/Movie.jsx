import { useMovie } from "../contexts/MovieContext";

const Movie = ({ movie = {}, selected }) => {
  const { Poster: poster, Title: title, Year: year, imdbID: movieId } = movie;
  const { setSelectedId } = useMovie();

  const handleSelectedMovie = () => setSelectedId(movieId);
  return (
    <li className={selected ? "active" : ""} onClick={handleSelectedMovie}>
      <img src={poster} alt={title} className="poster" />
      <h3>{title}</h3>

      <div>
        <p>
          <span>🗓</span>
          <span>{year}</span>
        </p>
      </div>
    </li>
  );
};

export default Movie;
