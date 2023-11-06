import { BsHourglassSplit } from 'react-icons/bs'
import { HiStar } from 'react-icons/hi2'
import {  AiFillCloseCircle } from "react-icons/ai";

const WatchedMovie = ({movie,onDeleteMovie})=> {
    const {
      imdbID:movieId,
      Title:title,
      Poster:poster,
      runtime,
      imdbRating,
      userRating

    } = movie
    
  return (
    <li>
      <img src={poster} alt={title} />
      <h3>{title}</h3>
      <div>
      <p>
        <span><HiStar/></span>
        <span>{imdbRating}</span>
      </p>

      <p>
        <span><HiStar/></span>
        <span>{userRating}</span>
      </p>

      <p>
        <span><BsHourglassSplit/></span>
        <span>{runtime}</span>
      </p>
      <p>
        <AiFillCloseCircle onClick={()=>onDeleteMovie(movieId)} className='red-icon'/>
      </p>
      </div>
    </li>
  )
}

export default WatchedMovie