import React from 'react'
import { Style } from "./ImageCard.css";
import Image from "next/image"

function ImageCard({image,key}) {
    const modifiedurl=image.replace("amp;", '');
  return (
    <div key={key} className='cardimageContainer'>
            <Image src={modifiedurl} fill className='cardpostImage' alt="Post Name" />
           
          </div>
  )
}

export default ImageCard
