import React from 'react'
import {styles} from "./Styles.css"
import Image from 'next/image'
import Logo from "./p1.png";
import Link from 'next/link';
async function getMostView() {
  const res = await fetch("https://jaypal1046.pythonanywhere.com/getPostMostViewData",{
      next:{
          revalidate: 30 //use 30 to opt  out of using catch
      }
  });
  return res.json();
}

async function LandingPage() {
  const flutterQ = await getMostView();
  return (
    <div className="post">

    <div className="imgContainer">
      <Image
        className="image"
        src={flutterQ["data"].url}
        
        fill
        alt=""
      />
    </div>
    <div className="textContainer">
      <h1 className="postTitle">
      {flutterQ["data"].title}
      </h1>
      <p className="postDesc">
      {flutterQ["data"].subTitle}
      </p>
      <Link href={`/${flutterQ["data"].id}`}>
      <button className="button">
      
        Read More
      </button>
      </Link>
    </div>
    </div>
  )
}

export default LandingPage
