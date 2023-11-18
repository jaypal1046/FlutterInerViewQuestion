import React from 'react'
import {style} from "./BlogCardList.css"
import BlogCard from './BlogCard/BlogCard'

function BlogCardList() {
  return (
    <div>
      <div className='bclcontainer'>
        <h1 className='bcltitle'>Recent Posts </h1>
        <div className='bposts'>
          <BlogCard/>
          <BlogCard/>
            

        </div>



      
      
    </div>
      
    </div>
  )
}

export default BlogCardList
