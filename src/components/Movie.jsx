const Movie = ({movie={} , handleSelectedId , selected})=> {
const {
  Poster:poster,
  Title:title,
  Year:year,
  imdbID:movieId
  }=movie

  
  return (
    <li className={selected ? "active" :""} onClick={()=>handleSelectedId(movieId)}>
      <img src={poster} alt={title} className='poster'/>
    <h3>{title}</h3>
    <div>
    <p>
      <span>🗓</span>
      <span>{year}</span>
    </p>
    </div>
    </li>
  )
}

export default Movie