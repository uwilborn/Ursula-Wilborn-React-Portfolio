import React from "react";

function Portfolio() {
  let projects = [
    {
      name: "HTML, CSS, and Git: Code Refactor",
      github: "https://github.com/uwilborn/Horiseon-Improved-Accessibility",
      live: "https://uwilborn.github.io/Horiseon-Improved-Accessibility/",
      image: "/images/CodeRefactor.png",
    },
    {
      name: "Portfolio",
      github: "https://github.com/uwilborn/Ursula-Wilborn-Portfolio.git",
      live: "https://uwilborn.github.io/Ursula-Wilborn-Portfolio/",
      image: "/images/Portfolio1.png",
    },
    {
      name: "JavaScript: Password Generator",
      github: "https://github.com/uwilborn/Password-Generator",
      live: "https://uwilborn.github.io/Password-Generator/",
      image: "/images/Password.PNG",
    },
    {
      name: "Web APIs: Code Quiz",
      github: "https://github.com/uwilborn/Challenge-Coding-Quiz.git",
      live: "https://uwilborn.github.io/Challenge-Coding-Quiz/",
      image: "/images/CodeQuiz.png",
    },
    {
      name: "Third-Party APIs: Work Day Scheduler",
      github: "https://github.com/uwilborn/Workday-Schedule-App.git",
      live: "https://uwilborn.github.io/Workday-Schedule-App/",
      image: "/images/Scheduler.png",
    },
    {
      name: "Server-Side APIs: Weather Dashboard",
      github: "https://github.com/uwilborn/Funky-Weather-Dashboard.git",
      live: "https://uwilborn.github.io/Funky-Weather-Dashboard/",
      image: "/images/Weather.png",
    },
    {
      name: "Project 1",
      github: "https://github.com/Xtended99/CoffeeOverFlow.git",
      live: "https://xtended99.github.io/CoffeeOverFlow/",
      image: "/images/Project1.png",
    },
    {
      name: "Portfolio 2",
      github: "https://github.com/uwilborn/Ursula-Wilborn-Portfolio.git",
      live: "https://uwilborn.github.io/Ursula-Wilborn-Portfolio-2/",
      image: "/images/Portfolio2.png",
    },
    {
      name: "Node.js Homework: Professional README Generator",
      github: "https://github.com/uwilborn/RightOn-README-Generator",
      live: "https://drive.google.com/file/d/1H_Uu6NS3Lq83uoJIrcaKy0tx6CClaPji/view",
      image: "/images/README.png",
    },
    {
      name: "Object-Oriented Programming: Team Profile Generator",
      github: "https://github.com/uwilborn/Dynamic-Team-Generator.git",
      live: "https://drive.google.com/file/d/1S5mc3eiRhXpBaTI9w8CBPK8QBQ-TNqJt/view",
      image: "/images/Team.png",
    },
    {
      name: "Express.js: Note Taker",
      github: "https://github.com/uwilborn/Star-Note-Taker",
      live: "https://starnotetaker.herokuapp.com/",
      image: "/images/Notetaker.png",
    },
    {
      name: "MySQL Homework: Employee Tracker",
      github: "https://github.com/uwilborn/QA-Employee-Tracker",
      live: "https://drive.google.com/file/d/1Ah637tYqSClUBYg3DkBO4I2HMdL7SmWx/view",
      image: "/images/ETracker.png",
    },
    {
      name: "Object-Relational Mapping (ORM): E-Commerce Back End",
      github: "https://github.com/uwilborn/Cinnamon-Commerce",
      live: "https://watch.screencastify.com/v/9uZ8VevsTLMGODTAvykb",
      image: "/images/ECommerce.png",
    },
    {
      name: "Model-View-Controller (MVC): Tech Blog",
      github: "https://github.com/uwilborn/Password-Generator",
      live: "https://uwilborn.github.io/Password-Generator/",
      image: "/images/Tech.png",
    },
    {
      name: "Project 2: Interactive Full-Stack Application",
      github: "https://github.com/uwilborn/The-Hub",
      live: "",
      image: "/images/Hub.png",
    },
    {
      name: "Project 2: Professional Materials",
      github: "https://github.com/uwilborn/The-Hub",
      live: "https://watch.screencastify.com/v/BynT4HR1cjdahniVy4Hl",
      image: "/images/Portfolio3.png",
    },
    {
      name: "Computer Science for JavaScript: Regex Tutorial",
      github: "https://github.com/uwilborn/Password-Generator",
      live: "https://uwilborn.github.io/Password-Generator/",
      image: "/images/Regex.png",
    },
    {
      name: "Nosql Homework: Workout Tracker",
      github: "https://github.com/uwilborn/HipHop-Excercise-Tracker",
      live: "https://hiphopfitnesstracker.herokuapp.com/",
      image: "/images/FTracker.png",
    },
    {
      name: "PWA Homework: Online/Offline Budget Trackers",
      github: "https://github.com/uwilborn/Password-Generator",
      live: "https://uwilborn.github.io/Password-Generator/",
      image: "/images/Password.png",
    },
    {
      name: "React: React Portfolio",
      github: "https://github.com/uwilborn/Password-Generator",
      live: "https://uwilborn.github.io/Password-Generator/",
      image: "/images/Password.png",
    },
    {
      name: "MERN: Book Search Engine",
      github: "https://github.com/uwilborn/Password-Generator",
      live: "https://uwilborn.github.io/Password-Generator/",
      image: "/images/Engine.png",
    },
    {
      name: "State Homework: Redux Store",
      github: "https://github.com/uwilborn/Password-Generator",
      live: "https://uwilborn.github.io/Password-Generator/",
      image: "/images/Redux.png",
    },
    {
      name: "Final Project: MERN Stack Single-Page Application",
      github: "https://github.com/uwilborn/Password-Generator",
      live: "https://uwilborn.github.io/Password-Generator/",
      image: "/images/FreeBird.png",
    },
  ];
  return (
    <div className="d-flex flex-wrap justify-content-between">
      {projects.map((project, key) => (
        <div className="card" style={{ width: "33%;" }}>
          <img
            className="card-img-top"
            src={project.image}
            width={400}
            height={400}
            alt={key}
          />
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text">Visit the Links</p>
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
