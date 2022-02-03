import React from "react";
import { Link } from "react-router-dom";
import "../headerstyle.css";
// import profilePicture from "../pages/images/20191012_180028.jpg";

function Header() {
  return (
    <header className="header">
      <div align="left" className="headerleft">
        {/* <img src={profilePicture} align="left" className="headerleft" /> */}
        <p className="">This is it</p>
      </div>
      <div align="right" className="headerright">
        {/* <img src={profilePicture} align="left" className="headerleft" /> */}
        <p className="">That is it</p>
      </div>
      <div className="" align="center">
        <h2>
          <Link className="name" to="/">
            Ursula Wilborn
          </Link>
        </h2>
      </div>
      <div>
        <ul className="nav-links" align="center">
          <li className="">
            <Link className="" aria-current="page" to="/">
              <span>Home</span>
            </Link>
          </li>

          <li className="">
            <Link className="" to="/about">
              <span>About</span>
            </Link>
          </li>
          <li className="">
            <Link className="" to="/portfolio">
              <span>Portfolio</span>
            </Link>
          </li>
          <li className="">
            <Link className="" to="/contact">
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
