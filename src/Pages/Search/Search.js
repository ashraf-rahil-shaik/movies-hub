import React from 'react'
import { Outlet } from 'react-router-dom';

const Search = () => {
  return (
    <div>
        <span className='pageTitle'> search </span>
        <Outlet />
    </div>
  )
}

export default Search;