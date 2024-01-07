import React from 'react'
import { Style } from "./ImageCard.css";
import Image from "next/image"

function ImageCard({image}) {
    const modifiedurl=image.replace("amp;", '');
  return (
    <div  className='cardimageContainer'>
            <Image src={modifiedurl} fill className='cardpostImage' alt="Post Name" />
           
          </div>
  )
}

export default ImageCard
