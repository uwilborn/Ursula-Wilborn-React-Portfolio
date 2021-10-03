import React from "react";

function Portfolio() {
  let projects = [
    {
      name: "Password Generator",
      github: "https://github.com/uwilborn/Password-Generator",
      live: "https://uwilborn.github.io/Password-Generator/",
      image: "/images/Password.png",
    },
    {
      name: "Password Generator",
      github: "https://github.com/uwilborn/Password-Generator",
      live: "https://uwilborn.github.io/Password-Generator/",
      image: "/images/Password.png",
    },
    {
      name: "Password Generator",
      github: "https://github.com/uwilborn/Password-Generator",
      live: "https://uwilborn.github.io/Password-Generator/",
      image: "/images/Password.png",
    },
  ];
  return (
    <div className="d-flex flex-wrap justify-content-between">
      {projects.map((project, key) => (
        <div className="card" style={{ width: "33%;" }}>
          <img
            src={project.image}
            className="card-img-top"
            width={400}
            height={400}
            alt={key}
          />
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href={project.github} className="btn btn-primary">
              Github
            </a>
            <a href={project.live} className="btn btn-primary">
              Live
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
