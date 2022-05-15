
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import SingleContent from '../../components/SingleContent/SingleContent';
import './Trending.css'
import CustomPagination from '../../components/Pagination/CustomPagination';
const Trending = () => {

const [page,setPage] = useState(1)
const [numOfPages,setNumOfPages] = useState()
const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    

    setContent(data.results);
    setNumOfPages(data.total_pages);
  }
  useEffect(()=>{
    window.scroll(0,0);
    fetchTrending();
    // eslint-disable-next-line
  },[page]);
  return (
    <div className='main'>
<span className='pageTitle'>Trending</span>
<div className ='trending'>{
  content && content.map((c)=>(
    <SingleContent key={c.id} id = {c.id} poster={c.poster_path} title={c.title||c.name}
    date={c.first_air_date||c.release_date}
    media_type={c.media_type}
    vote_average = {c.vote_average}
    />
  ))
}</div>
<Outlet />
<CustomPagination setPage={setPage}  numOfPages={numOfPages}/>
    </div>

  )
}

export default Trending