import React from 'react'
import Style from "./Pagination.css" 
import Link from 'next/link'

function Pagination() {
  return (
    <div className='pContainer'>

      <Link href="./blog/coding"><button className="pbutton"> Next</button></Link>
      
    </div>
  )
}

export default Pagination
