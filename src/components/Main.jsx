import axios from 'axios';
import { useEffect,useState, React } from 'react';
import { Link } from 'react-router-dom';
import requests from '../Requests';

const Main = () => {
  const [movies,setMovies] =useState([])  // empty array b/c thats where our API call is gonna return
  // taking a movie and picking a random one each time  
  const movie = movies[Math.floor(Math.random() * movies.length)]
  useEffect(() => {
    axios.get(requests.requestSpooky).then((response)=>{
      setMovies(response.data.results)
    })
  },[])
//console.log(movie)

const truncateString = (string,number) => {
  if(string?.length > number){
    return string.slice(0,number) + '...';
  }
    else return string;
}
  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
        <img className='w-full h-full object-cover'
         src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
         alt={movie?.title} /> 
      <div className='absolute w-full top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl'>{movie?.title}</h1>
      <div className='my-4'>
      <Link to="/play">
        <button className='border bg-red-700 text-black border-gray-300 py-2 px-5'> Play </button>
        </Link>
        <button className='border text-red-700 border-gray-300 py-2 px-5 ml-4'>  Watch Later or else...🔪</button>
      </div>
      <p className='text-yellow-500 text-sm'>
        Released: {movie?.release_date}</p>
      <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-white text-xs font-mono font-bold'>
        Synopsis: {truncateString(movie?.overview,150)}</p>
      </div>
      </div>
    </div>
  )
}

export default Main