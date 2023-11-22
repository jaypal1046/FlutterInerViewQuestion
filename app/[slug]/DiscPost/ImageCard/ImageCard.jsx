import React from 'react'
import { Style } from "./ImageCard.css";
import Image from "next/image"

function ImageCard({image}) {
    const modifiedurl=image.replace("img001046://:", '');
  return (
    <div  className='cardimageContainer'>
            <Image src={modifiedurl} className='cardpostImage'fill alt="Post Name" />
           
          </div>
  )
}

export default ImageCard
