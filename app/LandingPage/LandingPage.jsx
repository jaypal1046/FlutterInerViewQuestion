import React from "react";
import { Styles } from "./Styles.css";
import Image from "next/image";
import Logo from "./p1.png";
import Link from "next/link";
async function getMostView() {
  const res = await fetch(
    "https://jaypal1046.pythonanywhere.com/getPostMostViewData",
    {
      next: {
        revalidate: 30, //use 30 to opt  out of using catch
      },
    }
  );
  return res.json();
}

async function LandingPage() {
  const flutterQ = await getMostView();
  return (
    <div className="landingPost">
      <div className="landingImgContainer">
        <Image
          className="landingImage"
          src={flutterQ["data"].url}
          height={700}
          width={600}
          alt=""
        />
      </div>
      <div className="landingTextContainer">
        <h1 className="landingPostTitle">{flutterQ["data"].title}</h1>
        <p className="landingPostDesc">{flutterQ["data"].subTitle}</p>
        <Link href={`/${flutterQ["data"].id}`}>
          <button className="landingButton">Read More</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
