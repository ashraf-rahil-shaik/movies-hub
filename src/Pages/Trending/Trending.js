
import React from 'react'
import { Outlet } from 'react-router-dom'

const Trending = () => {
  return (
    <div>
<span className='pageTitle'>Trending</span>
<Outlet />
    </div>

  )
}

export default Trending