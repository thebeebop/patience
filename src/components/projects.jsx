import "../style/projects.css";
import { Link } from "react-router-dom";
import Footer from "./footer";
import weather from "../images/project-images/weather.png";
import hangman from "../images/project-images/hangman.png";
import calculator from "../images/project-images/calculator.png";
import northcoders from "../images/project-images/northcoders.png";
import devil from "../images/project-images/devil.png";
import chitChat from "../images/project-images/chitchat.png";
import { Element, scroller } from "react-scroll";

export default function Projects() {
  const projects = [
    {
      name: "ChitChat",
      type: "-- IN PROGRESS --",
      img: chitChat,
      path: "",
      work: "Independent Project",
    },
    {
      name: "Weather widget",
      type: "WEB APP",
      img: weather,
      path: "projects/weather-widget",
      work: "Independent Project",
    },
    {
      name: "Northcoders News",
      type: "WEB APP",
      img: northcoders,
      path: "projects/northcoders-news",
      work: "Bootcamp Project",
    },
    {
      name: "Hangman",
      type: "WEB APP",
      img: hangman,
      path: "projects/hangman",
      work: "Independent Project",
    },
    {
      name: "Calculator",
      type: "WEB APP",
      img: calculator,
      path: "projects/calculator",
      work: "Independent Project",
    },

    {
      name: "Salford Red Devils",
      type: "MOTION DESIGN",
      img: devil,
      path: "projects/salford-red-devils",
      work: "Client Project",
    },
    ,
  ];
  return (
    <>
      <Element name="top"></Element>
      <div className="app-projects">
        <div className="introduction-container">
          <div className="introduction">
            <h1 className="introduction-title">Hi! I'm Lewis.</h1>
            <p className="project-sub-title">
              I'm a Junior Front End Developer with experience in JavaScript,
              React, HTML & CSS. With a background in Graphic Design, I have a
              keen eye for styling and data visualisation.
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
          <div className="projects-button-container">
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              <button id="projects-button" className="contact-me-button">
                Hire me
              </button>
            </Link>
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
                  <p style={{ fontFamily: "Lato" }}>{project.work}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <p
          className="back-to-top"
          onClick={() => {
            scroller.scrollTo("top", { smooth: true });
          }}
        >
          Back to Top
        </p>
      </div>
      <Footer />
    </>
  );
}
