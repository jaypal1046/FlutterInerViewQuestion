
import BlogCardList from './BlogCardList/BlogCardList'
import {Style} from "./blog.css"

function blog() {
  return (
    <main>
       
      <div className='bConatiner'>
        <h1 className='bTitle'>Style Blog</h1>
    <div className='bcontent'>
      <BlogCardList/>

    </div>
      
    </div>
    </main>
  )
}

export default blog
