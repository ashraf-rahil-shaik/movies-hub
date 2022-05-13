import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import CustomPagination from '../../components/Pagination/CustomPagination'
import SingleContent from '../../components/SingleContent/SingleContent'

const Series = () => {
  const [page,setPage] =  useState(1)
  const [content,setContent] = useState([])
  const fetchSeries = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}`)
    setContent(data.results)
  }
 
  useEffect(() =>{
fetchSeries()
// eslint-disable-next-line
  },[page])
  return (
    <div>
        <span className='pageTitle'> Series</span>
        <div className ='trending'>{
  content && content.map((c)=>(
    <SingleContent key={c.id} id = {c.id} poster={c.poster_path} title={c.title||c.name}
    date={c.first_air_date||c.release_date}
    media_type= "tv"
    vote_average = {c.vote_average}
    />
  ))
}</div>
<CustomPagination setPage={setPage} />
        <Outlet />
    </div>
  )
}

export default Series