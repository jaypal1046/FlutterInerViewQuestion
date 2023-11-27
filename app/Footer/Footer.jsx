import React from "react";
import Logo from "./flutterwithnewcolor.png";
import Image from "next/image";
import Facebook from "./facebook.png";
import Instagram from "./instagram.png";
import Youtube from "./youtube.png";
import XLogo from "./x-logo.png";
import Link from "next/link";
import Style from "./Footer.css"

function Footer() {
  return (
    <main>
    <div className="fConatiner">
      <div className="info">
        <div className="logo">
          <Image
            src={Logo}
            alt="Flutter Dash Logo"
            width={50}
            height={50}></Image>
          <h1 className="logoText">Hi from Dash</h1>
        </div>
        <p className="logoDesc">
          {/* FIVQ is stand for Flutter Iner View Question. We provide Interview Question for prepration for Flutter .
          We Provide Inside view of Flutter Interview Question.
          We provide blog regarding Flutter that include letest new and Updates. */}

Discover FIVQ, your ultimate destination for a deep dive into Flutter interview questions and stay updated with the latest developments in the Flutter ecosystem, ensuring a well-rounded preparation experience.

        </p>
        <div className="icons">

        <Link href="https://www.facebook.com/people/Flutter-Interview-Question/61553570529913/"> <Image src={Facebook} alt="Facebook Logo" width={18} height={18} /></Link>
          <Link href="https://www.instagram.com/flutterinterviewquestion/"><Image src={Instagram} alt="Instagram Logo" width={18} height={18} /></Link>
          <Link href="https://www.youtube.com/channel/UCBCSGs9Qyx8v_Xk-6u6fvXw"><Image src={Youtube} alt="Youtube Logo" width={18} height={18} /></Link>
          <Link href="https://twitter.com/FlutterQ26361"><Image src={XLogo} alt="X-Logo" width={18} height={18} /></Link>


         
          
          
          
        </div>
      </div>
      <div className="links">
        <div className="flink">
          <span className="listTitle">Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/flutter">Flutter</Link>
          <Link href="/dart">Dart</Link>
          <Link href="/oops">OOPs</Link>
          <Link href="/about">About Us</Link>
          

        </div>

        <div className="flink">
          <span className="listTitle">Categoty</span>
          <Link href="/blog/coding">Coding</Link>
          <Link href="/blog/fastion">Fastion</Link>
          <Link href="/blog/food">Food</Link>
          <Link href="/blog/travel">Travel</Link>
          <Link href="/blog/culture">Culture</Link>
          <Link href="/blog/style">Style</Link>
         
          
            
        </div>

        <div className="flink">
          <span className="listTitle">Social</span>
          <Link href="https://www.facebook.com/people/Flutter-Interview-Question/61553570529913/">Facebook</Link>
          <Link href="https://www.instagram.com/flutterinterviewquestion/">Instagram</Link>
          <Link href="https://www.youtube.com/channel/UCBCSGs9Qyx8v_Xk-6u6fvXw">Youtube</Link>
          <Link href="https://twitter.com/FlutterQ26361">X @FlutterQ26361</Link>
       
          

        </div>
      </div>
    </div>
    </main>
  );
}

export default Footer;
