import React from 'react'
import { Outlet } from 'react-router-dom'

const Movies = () => {
  return (
    <div>
        <span className='pageTitle'>movies </span>
        <Outlet />
    </div>
  )
}

export default Movies