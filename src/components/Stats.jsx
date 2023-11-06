import { HiStar } from "react-icons/hi2";
import {BsHourglassSplit  } from "react-icons/bs";

const Stats = ({watchedMovies})=> {
  const makeReducer = (arr,field,dividedVal=1)=>{
    const reduce = arr.reduce((acc , item)=> acc += Number(item[field]) , 0)
    return reduce
  }
  
  const moviesLenth = watchedMovies.length
  const userRatings =Math.round(makeReducer(watchedMovies , "userRating" ) / moviesLenth*10)/10 || 0
  const imdbRatings =Math.round( makeReducer(watchedMovies , "imdbRating") / moviesLenth*10)/10 || 0
  const runTtimes =Math.round(makeReducer(watchedMovies , "runtime")) || 0
  
  return (
    <div className='summary'>
      <h3>stats of movies tou watched</h3>
    <div className='stats'>
      <p>
        <span>#️⃣</span>
        <span>{moviesLenth} movies</span>
      </p>

      <p>
        <span><HiStar/></span>
        <span>{userRatings}</span>
      </p>
      
      <p>
        <span><HiStar/></span>
        <span>{imdbRatings}</span>
      </p>

      <p>
        <span><BsHourglassSplit/></span>
        <span>{runTtimes} min</span>
      </p>
      


    </div>
    </div>
  )
}

export default Stats