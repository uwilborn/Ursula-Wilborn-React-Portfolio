import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-secondary text-center m-2 p-2">
      <h1> Ursula Wilborn, 2021</h1>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link
            className="nav-link active text-white"
            aria-current="page"
            to="/"
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
