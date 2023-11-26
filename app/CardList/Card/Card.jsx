import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "./p1.png";
import Style from "./Card.css";

function Card({key,flutters}) {
  return (
    <div className="conatiner" key={key}>
      <div className="imageConatiner">
        <Link href={flutters.url} >
        <Image className="climage" src={flutters.url} alt={flutters.urlAlt}    height={700}
        width={700} />
        </Link>
      </div>
      <div className="textConatiner">
        <div className="detail">
        <span className="date">{Date(flutters.date).toString().substring(4,16)} - </span>
        <span className="cdcategory">
        {flutters.Category}
        </span>
        </div>
        <Link href={`/${flutters.id}`}>
            <h1 className="cardTitle">{flutters.title}</h1>
        </Link>
        <p className="desc">
        {flutters.subTitle}
      </p>
      <Link className ="clink" href={`/${flutters.id}`}>Read More</Link>
      </div>
    </div>
  );
}

export default Card;
