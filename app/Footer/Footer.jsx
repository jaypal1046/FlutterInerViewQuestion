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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernature obcaecati veritatis. Aperiam cum
          porro sequi, totam minima conswquunture, aspernature deleniti vero
          repellendus dorales.
        </p>
        <div className="icons">
          <Image src={Facebook} alt="Facebook Logo" width={18} height={18} />
          <Image src={Instagram} alt="Instagram Logo" width={18} height={18} />
          <Image src={Youtube} alt="Youtube Logo" width={18} height={18} />
          <Image src={XLogo} alt="X-Logo" width={18} height={18} />
        </div>
      </div>
      <div className="links">
        <div className="flink">
          <span className="listTitle">Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/Blog">Blog</Link>
          <Link href="/Flutter">Flutter</Link>
          <Link href="/Dart">Dart</Link>
          <Link href="/OOPs">OOPs</Link>
          <Link href="/">About</Link>
          

        </div>

        <div className="flink">
          <span className="listTitle">Tags</span>
          <Link href="/">Style</Link>
          <Link href="/Blog">Fashion</Link>
          <Link href="/Flutter">Coding</Link>
          <Link href="/Dart">Travel</Link>
            
        </div>

        <div className="flink">
          <span className="listTitle">Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/Blog">Instagram</Link>
          <Link href="/Flutter">Youtube</Link>
          <Link href="/Dart">X</Link>
       
          

        </div>
      </div>
    </div>
    </main>
  );
}

export default Footer;
