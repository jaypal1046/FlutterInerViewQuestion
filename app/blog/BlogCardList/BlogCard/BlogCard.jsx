import React from 'react'
import Image from 'next/image'
import logo from "./p1.png";
import Link from 'next/link';
import {Style} from "./BlogCard.css"

function BlogCard() {
  return (
    <div className="blconatiner">
      <div className="blimageConatiner">
        <Image className="blclimage" src={logo} alt="" fill />
      </div>
      <div className="bltextConatiner">
        <div className="bldetail">
        <span className="bldate">12.02.2023 - </span>
        <span className="blcdcategory">
            CULTURE
        </span>
        </div>
        <Link href="/">
            <h1>Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
        </Link>
        <p className="bldesc ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Cupiditate, quam nisi magni ea laborum inventore voluptatum
        laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
        quisquam! Harum unde sit culpa debitis.
      </p>
      <Link className ="blclink" href="/">Read More</Link>
      </div>
    </div>
  )
}

export default BlogCard
