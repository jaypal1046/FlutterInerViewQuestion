import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "./p1.png";
import Style from "./Card.css";

function Card() {
  return (
    <div className="conatiner">
      <div className="imageConatiner">
        <Image className="climage" src={logo} alt="" fill />
      </div>
      <div className="textConatiner">
        <div className="detail">
        <span className="date">12.02.2023 - </span>
        <span className="cdcategory">
            CULTURE
        </span>
        </div>
        <Link href="/">
            <h1>Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
        </Link>
        <p className="desc ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Cupiditate, quam nisi magni ea laborum inventore voluptatum
        laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
        quisquam! Harum unde sit culpa debitis.
      </p>
      <Link className ="clink" href="/">Read More</Link>
      </div>
    </div>
  );
}

export default Card;
