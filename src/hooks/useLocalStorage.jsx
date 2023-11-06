import { useEffect, useState } from "react";

const useLocalStorage = (initialState, key) => {
  const [value, setValue] = useState(() => {
    const watched = localStorage.getItem(key);
    return watched ? JSON.parse(watched) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
