
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import SingleContent from '../../components/SingleContent/SingleContent';

const Trending = () => {
const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    console.log(data.results);

    setContent(data.results);
  }
  useEffect(()=>{
    fetchTrending()
  },[]);
  return (
    <div>
<span className='pageTitle'>Trending</span>
<div className ='trending'>{
  content && content.map((c)=>(
    <SingleContent key={c.id} id = {c.id} poster={c.poster_path} title={c.title}
    date={c.frist_air_date}
    media_type={c.media_type}
    vote_average = {c.vote_average}
    />
  ))
}</div>
<Outlet />
    </div>

  )
}

export default Trending