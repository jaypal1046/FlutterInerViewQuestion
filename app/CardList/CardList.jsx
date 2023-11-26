import React from 'react'
import Styles from "./CardList.css"
import Pagination from "../Pagination/Pagination"
import Card from "./Card/Card"



async function getTopPost() {
  const res = await fetch("https://jaypal1046.pythonanywhere.com/getPostMostViewDataAll",{
      next:{
          revalidate: 60 //use 30 to opt  out of using catch
      }
  });
  return res.json();
}


 

async function CardList() {
  const flutterQ = await getTopPost();
  return (
    <div className='clcontainer'>
        <h1 className='cltitle'>Recent Posts </h1>
        <div className='posts'>
           {flutterQ["data"].map((flutters) => (
            <Card flutters={flutters} key={flutters.id} />
           ))

           }
           
           
           

        </div>



        <Pagination />
      
    </div>
  )
}

export default CardList
