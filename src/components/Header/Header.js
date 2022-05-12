import React from 'react'
import "./Header.css"


const Header = () => {
  return (
      <>
        <div onClick={()=>window.scroll(0,0)} className='header'>Movies hub 🎬</div>
      </>
  
  )
}

export default Header