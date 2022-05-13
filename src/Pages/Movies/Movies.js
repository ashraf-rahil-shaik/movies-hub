import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Outlet } from 'react-router-dom'
import SingleContent from '../../components/SingleContent/SingleContent'
import Genres from '../../components/Genres/Genres'

const Movies = () => {
  const [content, setContent] = useState([]);
  const fetchMovie = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    

    setContent(data.results);
  }
  useEffect(()=>{
fetchMovie()
  },[])
  return (
    <div>
   
        <span className='pageTitle'>movies </span>
        <Genres  />
        <div className ='trending'>{
  content && content.map((c)=>(
    <SingleContent key={c.id} id = {c.id} poster={c.poster_path} title={c.title||c.name}
    date={c.first_air_date||c.release_date}
    media_type="movie"
    vote_average = {c.vote_average}
    />
  ))
}</div>
        <Outlet />
    </div>
  )
}

export default Movies