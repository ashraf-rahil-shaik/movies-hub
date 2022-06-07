import React from 'react'
import Pagination from '@mui/material/Pagination';

const CustomPagination = ({setPage,numOfPages=20 }) => {
const handlePageChange =(page)=>{
  setPage(page);
  window.scroll(0,0)
}

  return (


    <div 
    className='color'
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: 10,
   
    }}
    >
     
<Pagination onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          color="primary"
          hideNextButton
          hidePrevButton />

    </div>
  )
}

export default CustomPagination