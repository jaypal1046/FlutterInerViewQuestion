import React from 'react'
import Image from 'next/image'
import logo from "./p1.png";
import Link from 'next/link';
import {Style} from "./BlogCard.css"

function BlogCard({flutters}) {
  return (
    <div className="blconatiner">
      <div className="blimageConatiner">
        <Image className="blclimage" src={flutters.url} alt={flutters.urlAlt}    height={700}
        width={700} />
      </div>
      <div className="bltextConatiner">
        <div className="bldetail">
        <span className="bldate">{Date(flutters.date).toString().substring(4,16)} - </span>
        <span className="blcdcategory">
            {flutters.Category}
        </span>
        </div>
        <Link href={`/${flutters.id}`}>
            <h1 className='bcardTitle'>  {flutters.title.substring(0,80)}</h1>
        </Link>
        <p className="bldesc">  
        {flutters.subTitle.substring(0,158)}...
      </p>
      <Link className ="blclink" href={`/${flutters.id}`}>Read More</Link>
      </div>
    </div>
  )
}

export default BlogCard
