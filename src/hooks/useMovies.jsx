import { useEffect, useState } from "react";

const KEY = "fc1fef96";

const useMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // const controller = new AbortController();
    // const signal = controller.signal;
    (async () => {
      try {
        if (!query) return;
        setLoading(true);
        setError("");
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );

        // if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        setMovies(data.Search);
        setLoading(false);
      } catch (err) {
        setError(err.mesage);
        setLoading(false);
      }
    })();

    // return () => controller.abort();
  }, [query]);

  return { movies, loading, error };
};

export default useMovies;
