import React from 'react'
import {style} from "./BlogCardList.css"
 import BlogCard from './BlogCard/BlogCard'
// async function getTopByCatPost(cat) {
//   const res = await fetch("https://jaypal1046.pythonanywhere.com/getPostMostViewByCatData/"+cat,{
//       next:{
//           revalidate: 60 //use 30 to opt  out of using catch
//       }
//   });
//   return res.json();
// }
async function getTopByCatPost() {
  const res = await fetch("https://jaypal1046.pythonanywhere.com/getPostMostViewDataAll",{
      next:{
          revalidate: 60 //use 30 to opt  out of using catch
      }
  });
  return res.json();
}




async function BlogCardList() {
  const flutterQ = await getTopByCatPost();

  return (
    <div>
      <div className='bclcontainer'>
        <h1 className='bcltitle'>Recent Posts </h1>
        <div className='bposts'>

          {flutterQ["data"].map((flutters) => (
              <BlogCard key={flutters.id} flutters={flutters}/>
          ))}

          {flutterQ.length === 0 && <p className="text-center">There are no blog available on this Category!</p>}
         
         
            

        </div>



      
      
    </div>
      
    </div>
  )
}

export default BlogCardList
