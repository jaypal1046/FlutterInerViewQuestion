
import BlogCardList from './BlogCardList/BlogCardList'
import {Style} from "./blog.css"





async function blog({searchParams}) {

  const {cat}= searchParams||"Coding"


  return (
    <main>
       
      <div className='bConatiner'>
        <h1 className={`bTitle ${cat||"Coding"}`}>{cat||"Coding"} Blog</h1>
    <div className='bcontent'>

    

         <BlogCardList cat={cat||"Coding"}/>
      


    </div>
      
    </div>
    </main>
  )
}

export default blog
