import { PiPopcornDuotone } from "react-icons/pi";

const NavLink = ({ query, setQuery,numResults }) => {
  const handelQuery = (e) => setQuery(e.target.value);

  return (
    <nav className='main-nav'>
      <h1 className='logo'>
        <span className='popcorn'>
          <PiPopcornDuotone />
        </span>
        PopCorn
      
      </h1>
      <input
        className='search'
        type='text'
        placeholder='Search movies...'
        value={query}
        onChange={handelQuery}
      />
      <p className='results'>Found {numResults} results</p>
    </nav>
  );
};

export default NavLink;
