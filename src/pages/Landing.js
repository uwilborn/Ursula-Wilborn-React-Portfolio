import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import "../headerstyle.css";
import profilePicture from "../pages/images/20191012_180028.jpg";

function Landing() {
  return (
    <body display="inline">
      <div className="jumboton bg-warning align-content-center justify-content-center">
        <h1>Welcome</h1>
      </div>

      <div align="center" className="">
        <img src={profilePicture} align="left" className="headerleft" />
      </div>

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

      <div align="center">
        <a href="#" target="_blank">
          <button className="services">stemQA</button>
        </a>
        <a href="#" target="_blank">
          <button className="services">Freelance</button>
        </a>
        <a href="#" target="_blank">
          <button className="services">Github</button>
        </a>
      </div>
    </body>
  );
}

export default Landing;
