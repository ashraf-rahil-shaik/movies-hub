import React from 'react'
import { Outlet } from 'react-router-dom'

const Series = () => {
  return (
    <div>
        <h1 className='pageTitle'>Series</h1>
        <Outlet />
    </div>
  )
}

export default Series