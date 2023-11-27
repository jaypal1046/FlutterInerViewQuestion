import React from 'react'
import Styles from "./CardList.css"

import Card from "./Card/Card"



// async function getTopPost() {
// //   const res = await fetch("https://jaypal1046.pythonanywhere.com/getPostMostViewDataAll",{
// //       next:{
// //           revalidate: 60 //use 30 to opt  out of using catch
// //       }
// //   });
// //   return res.json();
// // }

async function getTopByCatPost(cat) {
  const res = await fetch("https://jaypal1046.pythonanywhere.com/getPostMostViewByCatData/"+cat,{
      next:{
          revalidate: 60 //use 30 to opt  out of using catch
      }
  });
  return res.json();
}


 

async function CardList({params}) {
  const flutterQ = await getTopByCatPost( params.charAt(0).toUpperCase() + params.slice(1));
  return (
    <div className='clcontainer'>
        <h1 className='cltitle'>Recent Posts </h1>
        <div className='posts'>
           {flutterQ["data"].map((flutters) => (
            <Card flutters={flutters} key={flutters.id} />
           ))

           }

             {flutterQ["data"].length === 0 && <p className="text-center">There are no recent blog for {params.charAt(0).toUpperCase() + params.slice(1)}</p>}
           
           
           

        </div>



       
      
    </div>
  )
}

export default CardList
