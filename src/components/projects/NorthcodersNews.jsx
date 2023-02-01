import "../../style/projects-style/northcoders-news.css";
import { useState, useRef, useEffect } from "react";
import { Element, scroller } from "react-scroll";
import css from "../../images/Tech-images/css.jpg";
import react from "../../images/Tech-images/react.jpg";
import reactRouter from "../../images/Tech-images/react-router.png";
import axios from "../../images/Tech-images/axios.png";
import github from "../../images/Tech-images/github.jpg";
import arrow from "../../images/small icons/arrow.png";

export default function NorthcodersNews() {
  const [bool, setBool] = useState(false);
  const [reading, setReading] = useState("Continue Reading");
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
        <header className="header">
          <div className="main-image">
            <img height="100%" alt="repeating video of app in use" />
          </div>
          <div className="title-container">
            <h1 className="main-title">Northcoders News</h1>
            <p>
              A fully responsive web app built with React during the
              Northcoders' front-end project phase.
            </p>
          </div>
          <div className="title-button-container">
            <div className="button-container">
              <div className="github-container">
                <a href="https://github.com/thebeebop/nc-news" target="blank">
                  <img
                    src={github}
                    className="github-img"
                    alt=""
                    style={{ borderRadius: 10 }}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="important">
            <h2>PLEASE NOTE:</h2>
            <p>
              As of 28/11/22 Heroku's free dynos, free Heroku Postgres and free
              Heroku Data was removed. As this app's API depended on this
              service, this web app will not be available for the moment.
            </p>
          </div>
        </header>
        <div className="container">
          <section className="technologies-used">
            <h2>Tech Stack:</h2>
            <div className="grid-container">
              <div className="tech-logos">
                <img
                  src={react}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div className="tech-logos">
                <img
                  src={reactRouter}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div className="tech-logos">
                <img
                  src={css}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div className="tech-logos">
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
              <p className="reading-button">! Under Maintenance</p>
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
          <section className="goal" ref={targetRef}>
            <h1 style={{ marginBottom: 10, fontSize: 30 }}>Goal:</h1>
            <ul className="list">
              <li>To build a fully responsive React web app.</li>
              <li>
                To build the front-end framework for the Northcoders News API,
                created during the back-end project phase.
              </li>
            </ul>
          </section>

          <section className="development">
            <h1 style={{ marginBottom: 10, fontSize: 30 }}>Initial Stages:</h1>
            <p style={{ marginBottom: 50 }}>
              I used the VSCode plug-in: TLDraw to design, arrange and workout
              the component state tree. I used Trello and the Kanban method to
              help organise and track my progress as I separated tasks into
              individual tickets
            </p>
            <div className="main-image-two"></div>
            <div className="main-image-two"></div>
          </section>

          <section className="IOS-functionality">
            <h1 style={{ marginBottom: 10, fontSize: 30 }}>
              IOS Functionality:
            </h1>
            <p style={{ marginBottom: 50 }}>
              Not only were the aesthetics of the calculator taken from the IOS
              design, but the functionality too. The IOS calculator allows the
              user to input large equations, uninterupted, without ever having
              to press the equals input. This is because it will keep track of
              what numbers have been pressed and with what operations. So, when
              a user decides to input a new operator, the IOS calculator will
              immediately calculate and update the existing equation and present
              the latest sum on the display. I looked to replicate this
              functionality in my own calculator.
            </p>
            <div className="main-image-two"></div>
          </section>

          <section className="challenges">
            <h1 style={{ marginBottom: 10, fontSize: 30 }}>Challenges:</h1>
            <p style={{ marginBottom: 0 }}>
              When building the button input functionality for the calculator, I
              ran into a problem.
            </p>
            <ul className="list">
              <li>
                <p>
                  <strong>PROBLEM:</strong> The display on the calculator did
                  not match the numbers that were being inputted. They appeared
                  to be one render behind.
                </p>
              </li>
              <li>
                <p>
                  <strong>SOLUTION:</strong> I placed a useEffect hook at the
                  top level of the component tree. The state variable that held
                  the information for the display of the calculator, which was
                  dependent on the input of the buttons, was used as a
                  dependency. With each new input, this triggered the useEffect
                  hook which held a state setter, resulting in the display
                  information updating in real time.
                </p>
              </li>
            </ul>
            <div className="main-image-two"></div>
          </section>

          <section className="result">
            <h1 style={{ marginBottom: 10, fontSize: 30 }}>Result:</h1>
            <p>A social news aggregation, content rating web site.</p>
            <ul className="list">
              <li>React was used to create the front-end architecture.</li>
              <li>The overall UI was styled with Vanilla CSS.</li>
            </ul>
          </section>

          <section className="what-i-learnt">
            <h1 style={{ marginTop: 20, fontSize: 30 }}>What I learnt:</h1>
            <ul className="list">
              <li>How to manipulate the DOM using JavaScript.</li>
              <li>How to manage Inputs & Outputs.</li>
              <li>How to use array methods such as: .filter, .includes etc.</li>
              <li>How to create responsive designs using flexbox and grids.</li>
              <li>How to make a responsive design using CSS3.</li>
            </ul>
            <p
              className="back-to-top"
              onClick={() => {
                scroller.scrollTo("top", { smooth: true });
              }}
            >
              Back to Top
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
