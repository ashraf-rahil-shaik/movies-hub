import React from 'react'
import { Outlet } from 'react-router-dom'

const Series = () => {
  return (
    <div>
        <span className='pageTitle'> Series</span>
        <Outlet />
    </div>
  )
}

export default Series