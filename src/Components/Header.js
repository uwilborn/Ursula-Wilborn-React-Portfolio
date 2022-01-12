import React from "react";
import { Link } from "react-router-dom";
import "../headerstyle.css";
import profilePicture from "../pages/images/20191012_180028.jpg";
import displayPicture from "../pages/images/drone-3874000__340.jpg";

function Header() {
  return (
    <header className="header">
      <div className="">
        <img src={profilePicture} align="left" className="headerleft" />
        <img src={displayPicture} align="right" className="headerright" />
      </div>
      <div className="" align="center">
        <h2>
          <Link className="name" to="/">
            <span>Ursula Wilborn</span>
          </Link>
        </h2>
      </div>
      <div>
        <ul className="nav-links">
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
