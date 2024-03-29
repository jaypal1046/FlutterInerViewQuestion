"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "./flutterwithnewcolor.png";

import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
export default function NavCom() {
  const [manuOpen, setManuOpen] = useState(false);
  const handleNav = () => {
    setManuOpen(!manuOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{ justifyContent: "start" }}>
      {isMobile ? (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            <Link href="https://docs.flutter.dev/get-started/install">
              <Image src={Logo} alt="Logo" width={70} quality={100} />
            </Link>
            <Link href={"/"}>Hi am Dash</Link>
            <div onClick={toggleNavbar} style={{ cursor: "pointer" }}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>
          </div>
          {isOpen && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "4px",
              }}
            >
              <Link href={"/Flutter"}>Flutter</Link>
              <Link href={"/Dart"}>Dart</Link>
              <Link href={"/Oops"}>OOP</Link>
              <Link href={"/blog"}>Blog</Link>
              <Link href={"/about"}>About</Link>

              {/* Add more links as needed */}
            </div>
          )}
        </div>
      ) : (
        <div className="header">
          <div >
            <Link href={"/"}>
              <Image src={Logo} alt="Logo" width={70} quality={100} />
            </Link>

            <Link href={"/"} className="navLogoContainer">Hi  from Dash</Link>
          </div>
          <article>
            <Link href={"/Flutter"}>Flutter</Link>
            <Link href={"/Dart"}>Dart</Link>
            <Link href={"/Oop"}>OOP</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/about"}>About</Link>
          </article>
        </div>
      )}
    </div>
  );
}
