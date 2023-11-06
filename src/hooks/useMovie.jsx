import { useEffect, useState } from "react";

const KEY = "fc1fef96";

const useMovie = (selectedId) => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // const controller = new AbortController()
    // const signal = controller.signal
    try {
      (async () => {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        // ,{signal})

        if (!res.ok) throw new Error("Something went wrong");

        const data = await res.json();

        setIsLoading(false);
        setMovie(data);
      })();
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }

    // return () => controller.abort();
  }, [selectedId]);

  return { error, isLoading, movie };
};

export default useMovie;
