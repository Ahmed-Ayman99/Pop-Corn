import { useState } from "react";
import { Toaster } from "react-hot-toast";

import useLocalStorage from "./hooks/useLocalStorage";
import NavLink from "./components/NavLink";
import Main from "./components/Main";
import Box from "./components/Box";
import MoviesList from "./components/MoviesList";
import Error from "./components/Error";
import Loadding from "./components/Loadding";
import useMovies from "./hooks/useMovies";
import Stats from "./components/Stats";
import WatchedList from "./components/WatchedList";
import WatchedMovie from "./components/WatchedMovie";
import SelectedMovie from "./components/SelectedMovie";
import StarRating from "./components/StarRating";
import Movie from "./components/Movie";
import Footer from "./components/Footer";

const App = () => {
  const [query, setQuery] = useState("inception");
  const { movies, loading, error } = useMovies(query);

  const [watchedMovies, setWatchedMovies] = useLocalStorage([], "watched");
  const [selectedId, setSelectedId] = useState();
  const selctedBol = Boolean(selectedId);

  const handleSelectedId = (id) => setSelectedId(id);
  const clearSelectedId = () => setSelectedId(null);
  const deleteWatchedMovie = (id) =>
    setWatchedMovies((prev) => prev.filter((movie) => movie.imdbID !== id));

  const addWatchedMovie = (movie) => {
    setWatchedMovies((prev) => [...prev, movie]);
    setSelectedId(null);
  };

  return (
    <>
      <NavLink numResults={movies?.length} query={query} setQuery={setQuery} />

      <Main>
        <Box>
          {error && <Error message={error} />}
          {loading && <Loadding />}
          {movies?.length === 0 && (
            <p className="search-placeholder">Search for movies</p>
          )}
          {movies === undefined && (
            <p className="search-placeholder">Search for another movie</p>
          )}
          {!loading && !error && movies?.length > 0 && (
            <MoviesList>
              {movies.map((movie) => (
                <Movie
                  selected={selectedId === movie.imdbID}
                  handleSelectedId={handleSelectedId}
                  movie={movie}
                  key={movie.imdbID}
                />
              ))}
            </MoviesList>
          )}
        </Box>
        <Box>
          {selctedBol && (
            <SelectedMovie
              clearSelectedId={clearSelectedId}
              selectedId={selectedId}
            >
              <StarRating
                watchedMovies={watchedMovies}
                selectedId={selectedId}
                addWatchedMovie={addWatchedMovie}
              />
            </SelectedMovie>
          )}

          {!selctedBol && (
            <>
              <Stats watchedMovies={watchedMovies} />
              <WatchedList>
                {watchedMovies.map((movie) => (
                  <WatchedMovie
                    onDeleteMovie={deleteWatchedMovie}
                    movie={movie}
                    key={movie.imdbID}
                  />
                ))}
              </WatchedList>
            </>
          )}
        </Box>
      </Main>

      <Footer />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 2000,
          },
          error: {
            duration: 4000,
          },
          style: {
            fontSize: "1.6rem",
            maxWidth: "50rem",
            padding: "1.6rem 2.4rem",
            backgroundColor: "var(--color-background-500)",
            color: "var(--color-text)",
          },
        }}
      />
    </>
  );
};

export default App;
