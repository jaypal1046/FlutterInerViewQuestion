import React from 'react'
import Styles from "./CardList.css"
import Pagination from "../Pagination/Pagination"
import Card from "./Card/Card"


function CardList() {
  return (
    <div className='clcontainer'>
        <h1 className='cltitle'>Recent Posts </h1>
        <div className='posts'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

        </div>



        <Pagination />
      
    </div>
  )
}

export default CardList
