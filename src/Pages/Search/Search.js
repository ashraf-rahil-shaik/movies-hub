import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Tab, Tabs  } from '@mui/material';
import axios from 'axios';
import CustomPagination from '../../components/Pagination/CustomPagination';
import SingleContent from '../../components/SingleContent/SingleContent';
import './Search.css'
const Search = () => {
const [type,setType] = useState(0);
const [searchText,setSearchText] = useState("");
const [page,setPage] =useState(1);
const [content,setContent] = useState([]);
const [numOfPages,setNumOfPages] =useState();
const fetchSearch = async () =>{
  try{
    const {data} = await axios.get( `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=en-US&query=${searchText}&page=${page}&include_adult=false`);
    setContent(data.results);
    setNumOfPages(data.total_pages)
  }
  catch(error){
    console.error(error);
  }
}
useEffect(()=>{
  window.scroll(0,0)
fetchSearch()
 // eslint-disable-next-line
},[type,page])
  return (
<>
    <div className='search'>
  
  <TextField id="filled-basic" label="Search" variant="filled" style={{flex:1,backgroundColor:"#fff"}} onChange = {(e)=>setSearchText(e.target.value)}/>
  <Button variant='contained' style={{marginLeft:10,backgroundColor:"#046576f9"}}>
    <SearchIcon fontSize='large'/>
  </Button>
  </div>
  
<Tabs
value ={type}
indicatorColor="primary"
textColor='primary'
onChange ={(event,newValue)=>{
  setType(newValue);
  setPage(1)
}}
style={{paddingBottom:5}}
aria-label = "disable tabs example">
  <Tab style = {{width:"50%"}} label = "Search Movies" />
  <Tab style = {{width:"50%"}} label = "Search TV Series" />
</Tabs>
<div className ='trending'>{
  content && content.map((c)=>(
    <SingleContent key={c.id} id = {c.id} poster={c.poster_path} title={c.title||c.name}
    date={c.first_air_date||c.release_date}
    media_type={type ? "tv":"movie"}
    vote_average = {c.vote_average}
    />
  ))
}
{searchText && !content &&
(type ? <h2>No Series found</h2> : <h2>No Movies found</h2>)}


</div>
{numOfPages > 1 && (<CustomPagination setPage={setPage} numOfPages={numOfPages} />)}

          <Outlet />
    
    </>
  )
}

export default Search;