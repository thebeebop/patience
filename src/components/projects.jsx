import "../style/projects.css";
import { Link } from "react-router-dom";
import weather from "../images/project-images/weather.png";
import hangman from "../images/project-images/hangman.png";
import calculator from "../images/project-images/calculator.png";
import northcoders from "../images/project-images/northcoders.png";
import devil from "../images/project-images/devil.png";
import Footer from "./footer";

export default function Projects() {
  const projects = [
    {
      name: "Weather widget",
      type: "WEB APP",
      img: weather,
      path: "projects/weather-widget",
    },
    {
      name: "Hangman",
      type: "WEB APP",
      img: hangman,
      path: "projects/hangman",
    },
    {
      name: "Calculator",
      type: "WEB APP",
      img: calculator,
      path: "projects/calculator",
    },
    ,
    {
      name: "Northcoders News",
      type: "-- UNDER MAINTENANCE --",
      img: northcoders,
      path: "",
    },
    {
      name: "Salford Red Devils",
      type: "MOTION DESIGN",
      img: devil,
      path: "projects/salford-red-devils",
    },
  ];
  return (
    <>
      <div className="app">
        <div className="introduction-container">
          <div className="introduction">
            <h1 className="introduction-title">Hi! I'm Lewis.</h1>
            <p className="sub-title">
              I'm a Junior Front End Developer with experience in JavaScript
              (ES6), React, HTML & CSS. With a background in Graphic Design, I
              have a keen eye for styling and data visualisation.
            </p>
          </div>
          <div className="intro-main-img">
            <lottie-player
              src="https://lottie.host/4e5db870-e2b4-4f96-ad17-6a728527303d/ZMHTQJr9s6.json"
              background="transparent"
              speed="1"
              style={{ width: "100%", height: "100%" }}
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div className="cards">
          {projects.map((project, i) => {
            return (
              <Link
                to={project.path}
                style={{ textDecoration: "none", color: "black" }}
                key={i}
              >
                <div className="card">
                  <div className="card-title-container">
                    <h3 className="card-subtitle">{project.type}</h3>
                    <h1 className="project-title">{project.name}</h1>
                  </div>

                  <div className="project-main-imgs">
                    <img src={project.img} height="100%" width="100%" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
