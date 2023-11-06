import { toast } from "react-hot-toast";
import { useState } from "react";

import Star from "./Star";
import useMovie from "../hooks/useMovie";

const StarRating = ({ addWatchedMovie, selectedId, watchedMovies }) => {
  const [rating, setRating] = useState("");
  const [tempRating, setTempRating] = useState("");
  const { movie } = useMovie(selectedId);

  const onClicked = (ind) => setRating(ind);
  const onMouseEntered = (ind) => setTempRating(ind);
  const onMouseLeaved = (ind) => setTempRating(rating);

  const addMovie = () => {
    const { imdbID, Title, Year, Poster, Runtime: runtime, imdbRating } = movie;
    if (!rating) return toast.error("Please provide rating");

    addWatchedMovie({
      imdbID,
      Title,
      Year,
      Poster,
      runtime: parseInt(runtime),
      imdbRating,
      userRating: rating,
    });
    toast.success("The movie added to your list");
  };

  const watchedMovie = watchedMovies.find(
    (watched) => watched.imdbID === selectedId
  );
  const isRated = Boolean(watchedMovie?.imdbID);

  return (
    <section className='rating-section'>
      <div className='rating-overview'>
        {!isRated && (
          <div className='ratings'>
            <div className='stars'>
              {Array.from({ length: 10 }).map((item, ind) => (
                <Star
                  key={ind}
                  onClicked={onClicked}
                  onMouseEntered={onMouseEntered}
                  onMouseLeaved={onMouseLeaved}
                  index={ind + 1}
                  fill={tempRating ? tempRating >= ind + 1 : rating >= ind + 1}
                />
              ))}
            </div>
            <div className='rating'>{tempRating || rating || ""}</div>
          </div>
        )}

        {isRated && (
          <p>You rate this movie with {watchedMovie.userRating} stars</p>
        )}
        {!isRated && rating && (
          <button className='btn-add' onClick={addMovie}>
            +Add to list
          </button>
        )}
      </div>
    </section>
  );
};

export default StarRating;
