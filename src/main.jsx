import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

import { MoviesContextProvider } from "./contexts/MoviesContext.jsx";
import { MovieContextProvider } from "./contexts/MovieContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MoviesContextProvider>
      <MovieContextProvider>
        <App />
      </MovieContextProvider>
    </MoviesContextProvider>
  </React.StrictMode>
);
