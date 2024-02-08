"use client";
import React from "react";
import Logo from "./flutterwithnewcolor.png";
import Image from "next/image";
import Facebook from "./facebook.png";
import Instagram from "./instagram.png";
import Youtube from "./youtube.png";
import XLogo from "./x-logo.png";
import Link from "next/link";
import Style from "./Footer.css";
import { useMediaQuery } from "react-responsive";
function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div>
      {isMobile ? (
        <div className="mobileFooterConatiner">
          <div className="mobileFooterInfo">
            <div className="mobileFooterlogo">
              <Image
                src={Logo}
                alt="Flutter Dash Logo"
                width={50}
                height={50}
              ></Image>
              <h1 className="mobileFooterlogoText">Hi from Dash</h1>
            </div>
            <p className="mobileFooterlogoDesc">
              Discover FIVQ, your ultimate destination for a deep dive into
              Flutter interview questions and stay updated with the latest
              developments in the Flutter ecosystem, ensuring a well-rounded
              preparation experience.
            </p>
            <div className="mobileFootericons">
              <Link href="https://www.facebook.com/people/Flutter-Interview-Question/61553570529913/">
                {" "}
                <Image
                  src={Facebook}
                  alt="Facebook Logo"
                  width={18}
                  height={18}
                />
              </Link>
              <Link href="https://www.instagram.com/flutterinterviewquestion/">
                <Image
                  src={Instagram}
                  alt="Instagram Logo"
                  width={18}
                  height={18}
                />
              </Link>
              <Link href="https://www.youtube.com/channel/UCBCSGs9Qyx8v_Xk-6u6fvXw">
                <Image
                  src={Youtube}
                  alt="Youtube Logo"
                  width={18}
                  height={18}
                />
              </Link>
              <Link href="https://twitter.com/FlutterQ26361">
                <Image src={XLogo} alt="X-Logo" width={18} height={18} />
              </Link>
            </div>
          </div>
          <div className="mobileFooterlinks">
            <div className="mobileFooterlink">
              <span className="mobileFooterlistTitle">Links</span>
              <Link href="/" className="mobileFooterListSubTiitle">Homepage</Link>
              <Link href="/blog" className="mobileFooterListSubTiitle">Blog</Link>
              <Link href="/Flutter" className="mobileFooterListSubTiitle">Flutter</Link>
              <Link href="/Dart" className="mobileFooterListSubTiitle">Dart</Link>
              <Link href="/Oop" className="mobileFooterListSubTiitle">OOP</Link>
              <Link href="/about" className="mobileFooterListSubTiitle">About Us</Link>
            </div>

            <div className="mobileFooterlink">
              <span className="mobileFooterlistTitle">Categoty</span>
              <Link href="/blog/coding" className="mobileFooterListSubTiitle">Coding</Link>
              <Link href="/blog/fastion" className="mobileFooterListSubTiitle">Fastion</Link>
              <Link href="/blog/food" className="mobileFooterListSubTiitle">Food</Link>
              <Link href="/blog/travel" className="mobileFooterListSubTiitle">Travel</Link>
              <Link href="/blog/culture" className="mobileFooterListSubTiitle">Culture</Link>
              <Link href="/blog/style" className="mobileFooterListSubTiitle">Style</Link>
            </div>

            <div className="mobileFooterlink">
              <span className="mobileFooterlistTitle">Social</span>
              <Link href="https://www.facebook.com/people/Flutter-Interview-Question/61553570529913/" className="mobileFooterListSubTiitle">
                Facebook
              </Link>
              <Link href="https://www.instagram.com/flutterinterviewquestion/" className="mobileFooterListSubTiitle" >
                Instagram
              </Link>
              <Link href="https://www.youtube.com/channel/UCBCSGs9Qyx8v_Xk-6u6fvXw" className="mobileFooterListSubTiitle">
                Youtube
              </Link>
              <Link href="https://twitter.com/FlutterQ26361" className="mobileFooterListSubTiitle">
                @FlutterQ26361
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <main>
          <div className="footerConatiner">
            <div className="footerInfo">
              <div className="footerlogo">
                <Image
                  src={Logo}
                  alt="Flutter Dash Logo"
                  width={50}
                  height={50}
                ></Image>
                <h1 className="footerlogoText">Hi from Dash</h1>
              </div>
              <p className="footerlogoDesc">
                Discover FIVQ, your ultimate destination for a deep dive into
                Flutter interview questions and stay updated with the latest
                developments in the Flutter ecosystem, ensuring a well-rounded
                preparation experience.
              </p>
              <div className="footericons">
                <Link href="https://www.facebook.com/people/Flutter-Interview-Question/61553570529913/">
                  {" "}
                  <Image
                    src={Facebook}
                    alt="Facebook Logo"
                    width={18}
                    height={18}
                  />
                </Link>
                <Link href="https://www.instagram.com/flutterinterviewquestion/">
                  <Image
                    src={Instagram}
                    alt="Instagram Logo"
                    width={18}
                    height={18}
                  />
                </Link>
                <Link href="https://www.youtube.com/channel/UCBCSGs9Qyx8v_Xk-6u6fvXw">
                  <Image
                    src={Youtube}
                    alt="Youtube Logo"
                    width={18}
                    height={18}
                  />
                </Link>
                <Link href="https://twitter.com/FlutterQ26361">
                  <Image src={XLogo} alt="X-Logo" width={18} height={18} />
                </Link>
              </div>
            </div>
            <div className="footerlinks">
              <div className="footerlink">
                <span className="footerlistTitle">Links</span>
                <Link href="/" className="footerListSubTiitle">Homepage</Link>
                <Link href="/blog" className="footerListSubTiitle">Blog</Link>
                <Link href="/Flutter" className="footerListSubTiitle">Flutter</Link>
                <Link href="/Dart" className="footerListSubTiitle">Dart</Link>
                <Link href="/Oop" className="footerListSubTiitle">OOP</Link>
                <Link href="/about" className="footerListSubTiitle">About Us</Link>
              </div>

              <div className="footerlink">
                <span className="footerlistTitle">Categoty</span>
                <Link href="/blog/coding" className="footerListSubTiitle">Coding</Link>
                <Link href="/blog/fastion" className="footerListSubTiitle">Fastion</Link>
                <Link href="/blog/food" className="footerListSubTiitle">Food</Link>
                <Link href="/blog/travel" className="footerListSubTiitle">Travel</Link>
                <Link href="/blog/culture" className="footerListSubTiitle">Culture</Link>
                <Link href="/blog/style" className="footerListSubTiitle">Style</Link>
              </div>

              <div className="footerlink">
                <span className="footerlistTitle">Social</span>
                <Link href="https://www.facebook.com/people/Flutter-Interview-Question/61553570529913/" className="footerListSubTiitle">
                  Facebook
                </Link>
                <Link href="https://www.instagram.com/flutterinterviewquestion/" className="footerListSubTiitle"> 
                  Instagram
                </Link>
                <Link href="https://www.youtube.com/channel/UCBCSGs9Qyx8v_Xk-6u6fvXw" className="footerListSubTiitle">
                  Youtube
                </Link>
                <Link href="https://twitter.com/FlutterQ26361" className="footerListSubTiitle">
                  @FlutterQ26361
                </Link>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default Footer;
