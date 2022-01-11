import React from "react";

function Portfolio() {
  let projects = [
    {
      name: "HTML, CSS, and Git: Code Refactor",
      github: "https://github.com/uwilborn/Horiseon-Improved-Accessibility",
      live: "https://uwilborn.github.io/Horiseon-Improved-Accessibility/",
      src: "/images/CodeRefactor.png",
    },
    {
      name: "Portfolio",
      github: "https://github.com/uwilborn/Ursula-Wilborn-Portfolio.git",
      live: "https://uwilborn.github.io/Ursula-Wilborn-Portfolio/",
      src: "/images/Portfolio1.png",
    },
    {
      name: "JavaScript: Password Generator",
      github: "https://github.com/uwilborn/Password-Generator",
      live: "https://uwilborn.github.io/Password-Generator/",
      src: "/images/Password.PNG",
    },
    {
      name: "Web APIs: Code Quiz",
      github: "https://github.com/uwilborn/Challenge-Coding-Quiz.git",
      live: "https://uwilborn.github.io/Challenge-Coding-Quiz/",
      src: "/images/CodeQuiz.png",
    },
    {
      name: "Third-Party APIs: Work Day Scheduler",
      github: "https://github.com/uwilborn/Workday-Schedule-App.git",
      live: "https://uwilborn.github.io/Workday-Schedule-App/",
      src: "/images/Scheduler.png",
    },
    {
      name: "Server-Side APIs: Weather Dashboard",
      github: "https://github.com/uwilborn/Funky-Weather-Dashboard.git",
      live: "https://uwilborn.github.io/Funky-Weather-Dashboard/",
      src: "/images/Weather.png",
    },
    {
      name: "Project 1",
      github: "https://github.com/Xtended99/CoffeeOverFlow.git",
      live: "https://xtended99.github.io/CoffeeOverFlow/",
      src: "/images/Project1.png",
    },
    {
      name: "Portfolio 2",
      github: "https://github.com/uwilborn/Ursula-Wilborn-Portfolio.git",
      live: "https://uwilborn.github.io/Ursula-Wilborn-Portfolio-2/",
      src: "/images/Portfolio2.png",
    },
    {
      name: "Node.js Homework: Professional README Generator",
      github: "https://github.com/uwilborn/RightOn-README-Generator",
      live: "https://drive.google.com/file/d/1H_Uu6NS3Lq83uoJIrcaKy0tx6CClaPji/view",
      src: "/images/README.png",
    },
    {
      name: "Object-Oriented Programming: Team Profile Generator",
      github: "https://github.com/uwilborn/Dynamic-Team-Generator.git",
      live: "https://drive.google.com/file/d/1S5mc3eiRhXpBaTI9w8CBPK8QBQ-TNqJt/view",
      src: "/images/Team.png",
    },
    {
      name: "Express.js: Note Taker",
      github: "https://github.com/uwilborn/Star-Note-Taker",
      live: "https://starnotetaker.herokuapp.com/",
      src: "/images/Notetaker.png",
    },
    {
      name: "MySQL Homework: Employee Tracker",
      github: "https://github.com/uwilborn/QA-Employee-Tracker",
      live: "https://drive.google.com/file/d/1Ah637tYqSClUBYg3DkBO4I2HMdL7SmWx/view",
      src: "/images/ETracker.png",
    },
    {
      name: "Object-Relational Mapping (ORM): E-Commerce Back End",
      github: "https://github.com/uwilborn/Cinnamon-Commerce",
      live: "https://watch.screencastify.com/v/9uZ8VevsTLMGODTAvykb",
      src: "/images/ECommerce.png",
    },
    {
      name: "Model-View-Controller (MVC): Tech Blog",
      github: "https://github.com/uwilborn/Password-Generator",
      live: "https://uwilborn.github.io/Password-Generator/",
      src: "/images/Tech.png",
    },
    {
      name: "Project 2: Interactive Full-Stack Application",
      github: "https://github.com/uwilborn/The-Hub",
      live: "",
      src: "/images/Hub.png",
    },
    {
      name: "Project 2: Professional Materials",
      github: "https://github.com/uwilborn/The-Hub",
      live: "https://watch.screencastify.com/v/BynT4HR1cjdahniVy4Hl",
      src: "/images/Portfolio3.png",
    },
    {
      name: "Computer Science for JavaScript: Regex Tutorial",
      github: "https://github.com/uwilborn/Password-Generator",
      live: "https://uwilborn.github.io/Password-Generator/",
      src: "/images/Regex.png",
    },
    {
      name: "Nosql Homework: Workout Tracker",
      github: "https://github.com/uwilborn/HipHop-Excercise-Tracker",
      live: "https://hiphopfitnesstracker.herokuapp.com/",
      src: "/images/FTracker.png",
    },
    {
      name: "PWA Homework: Online/Offline Budget Trackers",
      github: "https://github.com/uwilborn/Password-Generator",
      live: "https://uwilborn.github.io/Password-Generator/",
      src: "/images/Password.png",
    },
    {
      name: "React: React Portfolio",
      github: "https://github.com/uwilborn/Password-Generator",
      live: "https://uwilborn.github.io/Password-Generator/",
      src: "/images/Password.png",
    },
    {
      name: "MERN: Book Search Engine",
      github: "https://github.com/uwilborn/Password-Generator",
      live: "https://uwilborn.github.io/Password-Generator/",
      src: "/images/Engine.png",
    },
    {
      name: "State Homework: Redux Store",
      github: "https://github.com/uwilborn/Password-Generator",
      live: "https://uwilborn.github.io/Password-Generator/",
      src: "/images/Redux.png",
    },
    {
      name: "Final Project: MERN Stack Single-Page Application",
      github: "https://github.com/uwilborn/Password-Generator",
      live: "https://uwilborn.github.io/Password-Generator/",
      src: "/images/FreeBird.png",
    },
  ];
  return (
    <div className="d-flex flex-wrap justify-content-between bg-secondary">
      {projects.map((project, key) => (
        <div className="card" style={{ width: "33%;" }}>
          <img
            className="card-img-top"
            src={process.env.PUBLIC_URL + project.src}
            // src={require(`${project.src}`)}
            width={400}
            height={400}
            alt={project.name}
          />
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text">Visit the Links</p>
            <a href={project.github} className="btn btn-primary m-1 p-1">
              Github
            </a>
            <a href={project.live} className="btn btn-primary m-1 p-1">
              Live
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
