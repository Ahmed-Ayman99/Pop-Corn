import { createContext, useContext, useEffect, useState } from "react";
import { KEY } from "../utils/contstants";

const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        if (!selectedId) return;

        setIsLoading(true);
        setError("");

        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );

        const data = await res.json();

        setMovie(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.mesage);
        setIsLoading(false);
      }
    })();
  }, [selectedId]);

  const values = {
    movie,
    isLoading,
    error,
    selectedId,
    setSelectedId,
  };

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};

export const useMovie = () => {
  const context = useContext(MovieContext);

  return context;
};
