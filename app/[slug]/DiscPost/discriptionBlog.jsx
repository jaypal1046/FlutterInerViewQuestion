import React from 'react'
import ImageCard from './ImageCard/ImageCard'
import CodeCard from "./CodeCard/CodeCard"
import {Style} from "./descPost.css"


function DiscBlog({List}) {
  return (
    <div>
      {List.map((items) => (
       

        <div className='dscPostStyle'>
            {items.toLowerCase().substring(0,14) === 'code001046://:' ? (

              

          <CodeCard code={items} language="dart" />

          ) :  items.toLowerCase().substring(0,13) === 'img001046://:' ? (
            <ImageCard  image={items}/>
          ) :(
            <span>{items}</span>
          )}
        </div>
        
        ))}
    </div>
  )
}

export default DiscBlog


