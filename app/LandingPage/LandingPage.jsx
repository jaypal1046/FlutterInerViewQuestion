import React from 'react'
import {styles} from "./Styles.css"
import Image from 'next/image'
import Logo from "./p1.png";

function LandingPage() {
  return (
    <div className="post">

    <div className="imgContainer">
      <Image
        className="image"
        src={Logo}
        alt=""
      />
    </div>
    <div className="textContainer">
      <h1 className="postTitle">
        Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
      </h1>
      <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Cupiditate, quam nisi magni ea laborum inventore voluptatum
        laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
        quisquam! Harum unde sit culpa debitis.
      </p>
      <button className="button">
        Read More
      </button>
    </div>
    </div>
  )
}

export default LandingPage
