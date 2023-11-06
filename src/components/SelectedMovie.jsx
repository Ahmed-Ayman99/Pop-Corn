import { useEffect } from "react";
import useMovie from "../hooks/useMovie";
import Error from "./Error";
import Loadding from "./Loadding";

function SelectedMovie({ clearSelectedId, selectedId, children }) {
  const { isLoading, error, movie } = useMovie(selectedId);

  const {
    Title: title,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(() => {
    document.title = title;

    return () => (document.title = "PopCorn");
  }, [title]);

  if (isLoading) return <Loadding />;
  if (error) return <Error message={error} />;
  return (
    <div className='details'>
      <header>
        <button className='btn-back' onClick={clearSelectedId}>
          &larr;
        </button>

        <img src={poster} alt={`Poster of ${movie} movie`} />

        <div className='details-overview'>
          <h2>{title}</h2>
          <p>
            {released} &bull; {runtime}
          </p>
          <p>{genre}</p>
          <p>
            <span>⭐️</span>
            {imdbRating} IMDb rating
          </p>
        </div>
      </header>

      {children}

      <p>Starring: {actors}</p>
      <p>Directed by: {director}</p>
    </div>
  );
}

export default SelectedMovie;
