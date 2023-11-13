import { createContext, useContext, useEffect, useState } from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import { KEY } from "../utils/contstants";

const MoviesContext = createContext();

export const MoviesContextProvider = ({ children }) => {
  const [query, setQuery] = useState("interstellar");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  const [watchedMovies, setWatchedMovies] = useLocalStorage(
    [],
    "watched_movies"
  );

  useEffect(() => {
    // const controller = new AbortController();
    // const signal = controller.signal;

    const fetchMovies = async () => {
      try {
        if (!query) return;

        setIsLoading(true);
        setError("");
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );

        // if (!res.ok) throw new Error("Something went wrong");

        const data = await res.json();

        setMovies(data.Search);
        setIsLoading(false);
      } catch (err) {
        setError(err.mesage);
        setIsLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchMovies();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };

    // return () => controller.abort();
  }, [query]);

  const values = {
    movies,
    error,
    query,
    setQuery,
    isLoading,
    watchedMovies,
    setWatchedMovies,
  };

  return (
    <MoviesContext.Provider value={values}>{children}</MoviesContext.Provider>
  );
};

export const useMovies = () => {
  const context = useContext(MoviesContext);

  return context;
};
