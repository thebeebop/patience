import profilePic from "../images/about/profile pic.jpg";
import "../style/about.css";
import { useState, useRef, useEffect } from "react";
import { Element, scroller } from "react-scroll";
import { Link } from "react-router-dom";
import js from "../images/Tech-images/js.jpg";
import ae from "../images/Tech-images/ae.jpg";
import ai from "../images/Tech-images/ai.jpg";
import pr from "../images/Tech-images/pr.png";
import ps from "../images/Tech-images/ps.png";
import react from "../images/Tech-images/react.jpg";
import css from "../images/Tech-images/css.jpg";
import node from "../images/Tech-images/node.jpg";
import git from "../images/Tech-images/git.jpg";
import github from "../images/Tech-images/github.jpg";
import firebase from "../images/Tech-images/firebase.jpg";
import html from "../images/Tech-images/html.jpg";
import design from "../images/small icons/design.png";
import cat from "../images/small icons/cat.png";
import guitar from "../images/small icons/guitar.png";
import health from "../images/small icons/health.png";
import read from "../images/small icons/read.png";
import projects from "../images/small icons/projects.png";
import northcoders from "../images/small icons/northcoders.png";
import stress from "../images/small icons/stress.png";
import vegan from "../images/small icons/vegan.png";
import sapiens from "../images/books/sapiens.jpg";
import scottAdams from "../images/books/scott adams.jpg";
import dune from "../images/books/dune.jpg";
import deepWork from "../images/books/deep work.jpg";
import mandibles from "../images/books/the mandibles.jpg";
import darkTower from "../images/books/dark tower.jpg";
import hyperion from "../images/books/hyperion.jpg";
import arrow from "../images/small icons/arrow.png";
export default function About() {
  const [bool, setBool] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    if (targetRef.current !== null) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [bool, targetRef]);
  return (
    <>
      <Element name="top"></Element>
      <div className="mother-container">
        <section className="container-top">
          <div className="profile-pic">
            <img src={profilePic} alt="" className="image" />
          </div>
          <h1 className="about-header">
            Designer, developer, and most importantly, dog lover.
          </h1>
        </section>

        <div className={bool ? "hide-reading" : "show-reading"}>
          <div className="reading-button-container">
            <p
              className="reading-button"
              onClick={() => {
                setBool(!bool);
              }}
            >
              Continue Reading
            </p>
            <img
              src={arrow}
              height="20px"
              width="20px"
              style={{ marginTop: 1, marginLeft: 4 }}
            />
          </div>
        </div>

        <div className={bool ? "visible-element" : "hidden-element"}>
          <section className="brief-history-section" ref={targetRef}>
            <Element />
            <h1 style={{ fontSize: 45, marginBottom: 30 }}>Brief History:</h1>
            <div className="history-section-logos">
              <img src={design} height="100%" width="100%" />
            </div>
            <p
              style={{
                marginBottom: 30,
                width: "100%",
                textAlign: "center",
                maxWidth: 600,
              }}
            >
              I studied Graphic Design for 4+ years, specialising in
              Illustration, Design Layout and Motion Design. Graduating at the
              end of 2021, I decided that I wanted to pursue a different career
              path and started to learn Software Development.
            </p>
            <div className="arrow"></div>
            <div className="history-section-logos">
              <img src={northcoders} height="100%" width="100%" />
            </div>
            <p
              style={{
                marginBottom: 30,
                width: "100%",
                textAlign: "center",
                maxWidth: 600,
              }}
            >
              After a few months of self-learning, I enrolled onto a 14-week
              full-stack developer bootcamp with Northcoders. On this course I
              learnt the fundamentals of JavaScript, built my own API and
              created a social news web application with React, HTML & CSS.
            </p>
            <div className="arrow"></div>
            <div className="history-section-logos">
              <img src={projects} height="100%" width="100%" />
            </div>
            <p
              style={{
                marginBottom: 30,
                width: "100%",
                textAlign: "center",
                maxWidth: 600,
              }}
            >
              After graduating from the Northcoders' bootcamp, I've continued to
              learn and to challenge my knowledge by undertaking my own
              self-directed projects.
            </p>
          </section>

          <section className="tech-skills-section">
            <h1 style={{ fontSize: 45, marginBottom: 50 }}>Tech Skills:</h1>
            <div className="tech-skills-grid">
              <div className="tech-image" id="js">
                <img
                  src={js}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div className="tech-image" id="html5">
                <img
                  src={html}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div className="tech-image" id="css3">
                <img
                  src={css}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div className="tech-image" id="react">
                <img
                  src={react}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div className="tech-image" id="node">
                <img
                  src={node}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div className="tech-image" id="git">
                <img
                  src={git}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div className="tech-image" id="github">
                <img
                  src={github}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div className="tech-image" id="firebase">
                <img
                  src={firebase}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div className="tech-image" id="ae">
                <img
                  src={ae}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div className="tech-image" id="ai">
                <img
                  src={ai}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div className="tech-image" id="ps">
                <img
                  src={ps}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div className="tech-image" id="pr">
                <img
                  src={pr}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 10 }}
                />
              </div>
            </div>
            <div className="about-button-container">
              <Link to="/contact">
                <button className="contact-me-button">Hire me •</button>
              </Link>
            </div>
          </section>

          <section className="vanity-section">
            <h1 style={{ fontSize: 45, marginBottom: 30 }}>Personal Stuff:</h1>
            <div className="vanity-grid">
              <div className="vanity-images">
                <div className="vanity-logos">
                  <img
                    src={read}
                    height="100%"
                    width="100%"
                    style={{ borderRadius: 10 }}
                  />
                </div>
                <p style={{ width: "100%", textAlign: "center" }}>
                  I enjoy reading.
                </p>
              </div>
              <div className="vanity-images">
                <div className="vanity-logos">
                  <img
                    src={guitar}
                    height="100%"
                    width="100%"
                    style={{ borderRadius: 10 }}
                  />
                </div>
                <p style={{ width: "100%", textAlign: "center" }}>
                  I play classical guitar.
                </p>
              </div>
              <div className="vanity-images">
                <div className="vanity-logos">
                  <img
                    src={vegan}
                    height="100%"
                    width="100%"
                    style={{ borderRadius: 10 }}
                  />
                </div>
                <p style={{ width: "100%", textAlign: "center" }}>
                  I used to be vegan.
                </p>
              </div>
              <div className="vanity-images">
                <div className="vanity-logos">
                  <img
                    src={cat}
                    height="100%"
                    width="100%"
                    style={{ borderRadius: 10 }}
                  />
                </div>
                <p style={{ width: "100%", textAlign: "center" }}>
                  I prefer dogs.
                </p>
              </div>
              <div className="vanity-images">
                <div className="vanity-logos">
                  <img
                    src={stress}
                    height="100%"
                    width="100%"
                    style={{ borderRadius: 10 }}
                  />
                </div>
                <p style={{ width: "100%", textAlign: "center" }}>
                  I hate stress.
                </p>
              </div>
              <div className="vanity-images">
                <div className="vanity-logos">
                  <img
                    src={health}
                    height="100%"
                    width="100%"
                    style={{ borderRadius: 10 }}
                  />
                </div>
                <p style={{ width: "100%", textAlign: "center" }}>
                  I like health.
                </p>
              </div>
            </div>
          </section>

          <section className="books-read-section">
            <h1 style={{ fontSize: 40, marginBottom: 60 }}>Favourite books:</h1>

            <div className="books-grid">
              <div className="books">
                <img
                  src={dune}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 15 }}
                />
              </div>

              <div className="books">
                <img
                  src={darkTower}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 15 }}
                />
              </div>

              <div className="books">
                <img
                  src={sapiens}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 15 }}
                />
              </div>

              <div className="books">
                <img
                  src={deepWork}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 15 }}
                />
              </div>

              <div className="books">
                <img
                  src={scottAdams}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 15 }}
                />
              </div>

              <div className="books">
                <img
                  src={mandibles}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 15 }}
                />
              </div>
            </div>
          </section>

          <section className="books-reading-section">
            <h1 style={{ fontSize: 45, marginBottom: 30 }}>Reading atm:</h1>
            <div className="book-container-lonely">
              <div className="books-lonely">
                <img
                  src={hyperion}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 15 }}
                />
              </div>
            </div>
          </section>
          <p
            className="back-to-top"
            onClick={() => {
              scroller.scrollTo("top", { smooth: true });
            }}
          >
            Back to Top
          </p>
        </div>
      </div>
    </>
  );
}
