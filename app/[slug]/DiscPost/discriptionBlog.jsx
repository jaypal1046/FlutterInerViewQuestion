import React from 'react'
import ImageCard from './ImageCard/ImageCard'
import CodeCard from "./CodeCard/CodeCard"
import {Style} from "./descPost.css"


function DiscBlog({List}) {
  return (
    <div>
      {List.map((items) => (
       

        <div className='dscPostStyle' key={`this${items}`}>
            {items.toLowerCase().substring(0,14) === 'code001046://:' ? (

              

          <CodeCard key={items} code={items} language="dart" />

          ) :  items.toLowerCase().substring(0,13) === 'img001046://:' ? (
            <ImageCard key={items} image={items}/>
          ) :(
            <span key={items}>{items}</span>
          )}
        </div>
        
        ))}
    </div>
  )
}

export default DiscBlog


