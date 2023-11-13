import { PiPopcornDuotone } from "react-icons/pi";
import { useMovies } from "../contexts/MoviesContext";

const NavLink = () => {
  const { query, setQuery, movies } = useMovies();

  return (
    <nav className="main-nav">
      <h1 className="logo">
        <span className="popcorn">
          <PiPopcornDuotone />
        </span>
        PopCorn
      </h1>

      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <p className="results">Found {movies?.length} results</p>
    </nav>
  );
};

export default NavLink;
