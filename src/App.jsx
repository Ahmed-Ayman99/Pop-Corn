import SelectedMovie from "./components/SelectedMovie";
import StarRating from "./components/StarRating";
import MoviesList from "./components/MoviesList";
import NavLink from "./components/NavLink";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Box from "./components/Box";

import { useMovie } from "./contexts/MovieContext";
import MoviesStats from "./components/MoviesStats";
import ToasterItem from "./components/ToasterItem";

const App = () => {
  const { selectedId } = useMovie();

  return (
    <>
      <NavLink />
      <Main>
        <Box>
          <MoviesList />
        </Box>

        <Box>
          {selectedId && (
            <SelectedMovie>
              <StarRating />
            </SelectedMovie>
          )}

          {!selectedId && <MoviesStats />}
        </Box>
      </Main>
      <Footer />

      <ToasterItem />
    </>
  );
};

export default App;
