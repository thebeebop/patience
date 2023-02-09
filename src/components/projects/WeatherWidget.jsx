import "../../style/projects-style/foundation.css";
import "../../style/projects-style/weather-widget.css";
import { useState, useRef, useEffect } from "react";
import { Element, scroller } from "react-scroll";
import Footer from "../Footer";
import caluclateTimeImg from "../../images/weather/calculateTime.png";
import react from "../../images/Tech-images/react.jpg";
import css from "../../images/Tech-images/css.jpg";
import mui from "../../images/Tech-images/mui.png";
import axios from "../../images/Tech-images/axios.png";
import github from "../../images/Tech-images/github.jpg";
import main from "../../images/weather/main-image-two.png";
import arrow from "../../images/small icons/arrow.png";
import ui from "../../images/weather/ui.png";
import tree from "../../images/weather/tree.png";
import day from "../../images/weather/milky-blue.png";
import night from "../../images/weather/milky-purple.jpg";
import githubb from "../../images/weather/github.png";

export default function WeatherWidget() {
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
      <article id="weather-widget">
        <Element name="top"></Element>
        <div className="mother-container">
          <header className="header">
            <div className="main-image-container">
              <div className="main-image">
                <img src={main} height="100%" width="100%" alt="" />
              </div>
            </div>

            <div className="title-button-container">
              <div className="title-container">
                <div>
                  <h1 className="main-title">Weather widget</h1>
                  <p className="sub-title">
                    A fully responsive web app built with React using the
                    OpenWeatherMap's API Onecall 3.0.
                  </p>
                </div>
              </div>
              <div className="button-container">
                <div className="github-container">
                  <a
                    href="https://github.com/thebeebop/React-Weather-App"
                    target="blank"
                  >
                    <img
                      src={github}
                      className="github-img"
                      alt=""
                      style={{ borderRadius: 10 }}
                    />
                  </a>
                </div>
                <a
                  href="https://weather-application-1.netlify.app/"
                  target="blank"
                >
                  <button className="button">View App</button>
                </a>
              </div>
            </div>
          </header>
          <div className="container">
            <section className="technologies-used">
              <h2>Tech Stack:</h2>
              <div className="grid-container">
                <div className="tech-logos" id="react">
                  <img
                    src={react}
                    height="100%"
                    width="100%"
                    style={{ borderRadius: 10 }}
                  />
                </div>
                <div className="tech-logos" id="css3">
                  <img
                    src={css}
                    height="100%"
                    width="100%"
                    style={{ borderRadius: 10 }}
                  />
                </div>
                <div className="tech-logos" id="mui">
                  <img
                    src={mui}
                    height="100%"
                    width="100%"
                    style={{ borderRadius: 10 }}
                  />
                </div>
                <div className="tech-logos" id="axios">
                  <img
                    src={axios}
                    height="100%"
                    width="100%"
                    style={{ borderRadius: 10 }}
                  />
                </div>
              </div>
            </section>
            <div className={bool ? "hide-reading" : "show-reading"}>
              <div className="reading-button-container">
                <p
                  className="continue-reading"
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
                  className="arrow-button"
                />
              </div>
            </div>
          </div>
          <div className={bool ? "visible-element" : "hidden-element"}>
            <section className="goal-section" ref={targetRef}>
              <h1 className="section-titles">Goal:</h1>
              <ul className="goal-list">
                <li>To become more familiar with the React framework.</li>
                <li>
                  To gain experience in handling state and passing state between
                  components as props.
                </li>
                <li>To gain experience working with an API.</li>
              </ul>
            </section>

            <section className="development-section">
              <h1 className="section-titles">Initial Stages:</h1>
              <p style={{ marginBottom: 70 }}>
                I used the design application Figma, to design the UI layout as
                well as to draw the state component tree. I used Trello and the
                Kanban method to help organise and track my progress as I
                separated tasks into individual tickets
              </p>

              <div className="main-image-two" id="img-one">
                <img
                  src={ui}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 15 }}
                />
              </div>
              <div className="main-image-two" id="img-two">
                <img
                  src={tree}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 15 }}
                />
              </div>
            </section>

            <section className="github-section">
              <h1 className="section-titles">GitHub:</h1>
              <p style={{ marginBottom: 70 }}>
                I built new features for the app incrementally, using git for
                the verion control and making frequent commits to the repository
                stored on github.
              </p>

              <div className="main-image-two" id="github-section-img">
                <img
                  src={githubb}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 15 }}
                />
              </div>
            </section>

            <section className="dynamic-rendering-section">
              <h1 className="section-titles">Day/night-time feature</h1>
              <p style={{ marginBottom: 70, marginLeft: 20 }}>
                During the final stages of the app's creation, I wanted to
                challenge myself by creating a day/night-cycle function. This
                function would change the background image of the application,
                depending on what the current local time was of the specificed
                location.
              </p>

              <div className="main-image-two" id="day-img">
                <img
                  src={day}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 15 }}
                />
              </div>
              <div className="main-image-two" id="night-img">
                <img
                  src={night}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 15 }}
                />
              </div>
            </section>

            <section className="challenges-section">
              <h1 className="section-titles">Challenges:</h1>{" "}
              <p style={{ marginBottom: 20 }}>
                Rendering the correct background image based on the current
                local time proved to be very challenging.
              </p>
              <p className="solution-title">
                <strong>SOLUTION:</strong>
              </p>
              <ul className="solution-list">
                <li>
                  Using the current local time which was delivered by the API,
                  create a set of conditions that would determine whether that
                  location was covered in sun or not.
                </li>
                <li style={{ marginBottom: 70 }}>
                  Have CSS classes saved as variables that would update
                  accordingly.
                </li>
              </ul>
              <div className="main-image-two" id="weather-challenge-img">
                <img
                  src={caluclateTimeImg}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 15 }}
                />
              </div>
            </section>

            <section className="result-section">
              <h1 className="section-titles">Result:</h1>

              <ul className="result-list">
                <li>A fully responsive web application built with React.</li>
                <li>React was used to create the front-end architecture.</li>
                <li>The overall UI was styled with Vanilla CSS.</li>
                <li>
                  The 'search-bar' component was imported from the MUI library.
                </li>
                <li>
                  Axios was used to handle promise based requests to the
                  OpenWeatherMap API.
                </li>
              </ul>
            </section>

            <section className="what-i-learnt-section">
              <h1 className="section-titles">What I learnt:</h1>
              <ul className="i-learnt-list">
                <li>Declaring, handling and updating various state.</li>
                <li>
                  Using useEffect to make API calls and to update state
                  variables.
                </li>
                <li>
                  Handling props, sharing props between different components.
                </li>
                <li>
                  Working with an API, using a promised based library to manage
                  API calls.
                </li>
                <li>Error Handling.</li>
                <li>Creating UI elements using data from a JSON object.</li>
                <li>
                  Understanding the difference between stateful and stateless
                  components.
                </li>
                <li>Dynamic Rendering.</li>
              </ul>
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
        <div className={bool ? "visible-element" : "hidden-element"}>
          <Footer />
        </div>
      </article>
    </>
  );
}
