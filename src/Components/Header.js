import React from "react";
import { Link } from "react-router-dom";
import "../headerstyle.css";

function Header() {
  return (
    <header className="header">
      <img src="../pages/images/Purple_2053.jpg" className="logo" />
      <h2>
        <Link className="" to="/">
          <span>Ursula Wilborn</span>
        </Link>
      </h2>
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
    </header>
  );
}

export default Header;
