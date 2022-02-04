import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import "../headerstyle.css";

function Landing() {
  return (
    // <div className="jumboton bg-warning align-content-center justify-content-center">
    //   <h1>Welcome</h1>
    // </div>
    <body>
      <div class="containerl">
        <div class="split left">
          <h3>Senior Quality Engineer</h3>
          <a href="#" class="btn">
            Explore
          </a>
        </div>
        <div class="split right">
          <h3>Full Stack Web Developer</h3>
          <a href="#" class="btn">
            Explore
          </a>
        </div>
      </div>
    </body>
  );
}

export default Landing;
