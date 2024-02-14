import Image from "next/image";
import React from "react";
import Link from "next/link";
import Style from "./Card.css";

function Card({key,flutters}) {
  return (
    <div className="cardConatiner" key={key}>
      <div className="cardImageConatiner">
        <Link href={flutters.url} >
        <Image className="cardImage" src={flutters.url} alt={flutters.urlAlt}    height={700}
        width={700} />
        </Link>
      </div>
      <div className="cardTextConatiner">
        <div className="cardDetail">
        <span className="cardDate">{Date(flutters.date).toString().substring(4,16)} - </span>
        <span className="cardCategory">
        {flutters.Category}
        </span>
        </div>
        <Link href={`/${flutters.id}`}>
            <h1 className="cardTitle">{flutters.title}</h1>
        </Link>
        <p className="cardDesc">
        {flutters.subTitle}
      </p>
      <Link className ="cardClink" href={`/${flutters.id}`}>Read More</Link>
      </div>
    </div>
  );
}

export default Card;
