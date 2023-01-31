import "../../style/projects-style/calculator.css";
import { useState, useRef, useEffect } from "react";
import { Element, scroller } from "react-scroll";
import css from "../../images/Tech-images/css.jpg";
import react from "../../images/Tech-images/react.jpg";
import github from "../../images/Tech-images/github.jpg";
import main from "../../images/calculator/main.png";
import arrow from "../../images/small icons/arrow.png";
import uiOne from "../../images/calculator/ui-1.png";
import uiTwo from "../../images/calculator/ui-2.png";
import challenge from "../../images/calculator/challenge.png";
import video from "../../videos/video.mp4";

export default function Calculator() {
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
            <img
              src={main}
              height="100%"
              width="100%"
              alt="repeating video of app in use"
            />
          </div>
          <div className="title-button-container">
            <div className="title-container">
              <h1 className="main-title">Calculator</h1>
              <p className="sub-title">
                A responsive web application inspired by the IOS calculator.
              </p>
            </div>
            <div className="button-container">
              <div className="github-container">
                <a
                  href="https://github.com/thebeebop/React-Calculator"
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
              <a href="https://calculao.netlify.app/" target="blank">
                <button className="button">View App</button>
              </a>
            </div>
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
                  src={css}
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
                style={{ marginTop: 4, marginLeft: 4 }}
              />
            </div>
          </div>
        </div>
        <div className={bool ? "visible-element" : "hidden-element"}>
          <section className="goal" ref={targetRef}>
            <h1 className="section-titles">Goal:</h1>
            <ul className="goal-list">
              <li>
                To challenge my problem solving skills by creating a fully
                functioning calculator from scratch.
              </li>
              <li>To become more familiar with the React framework.</li>
              <li>To become more familiar with CSS responsive design.</li>
            </ul>
          </section>

          <section className="development">
            <h1 className="section-titles">Initial Stages:</h1>
            <p style={{ marginBottom: 50 }}>
              I used the VSCode plug-in: TLDraw to design, arrange and workout
              the component state tree. I used Trello and the Kanban method to
              help organise and track my progress as I separated tasks into
              individual tickets
            </p>

            <div className="main-image-two" id="ui-img-one">
              <img
                src={uiOne}
                height="100%"
                width="100%"
                alt=""
                style={{ borderRadius: 15 }}
              />
            </div>
            <div className="main-image-two" id="ui-img-two">
              <img
                src={uiTwo}
                height="100%"
                width="100%"
                alt=""
                style={{ borderRadius: 15 }}
              />
            </div>
          </section>

          <section className="IOS-functionality">
            <div>
              <h1 className="section-titles">IOS Functionality:</h1>
              <p style={{ marginBottom: 50 }}>
                Not only were the aesthetics of the calculator taken from the
                IOS design, but the functionality too. The IOS calculator allows
                the user to input large equations, uninterupted, without ever
                having to press the equals input. This is because it will keep
                track of what numbers have been pressed and with what
                operations. So, when a user decides to input a new operator, the
                IOS calculator will immediately calculate and update the
                existing equation and present the latest sum on the display. I
                looked to replicate this functionality in my own calculator.
              </p>
            </div>

            <div className="video-calculator">
              <video
                autoplay
                controls
                loop
                src={video}
                height="100%"
                width="100%"
                type="mp4"
                style={{ borderRadius: 15 }}
              />
            </div>
          </section>

          <section className="challenges" id="calculator-challenges">
            <h1 className="section-titles">Challenges:</h1>
            <p style={{ marginBottom: 0 }}>
              When building the button input functionality for the calculator, I
              ran into a problem. The display on the calculator did not match
              the numbers that were being inputted. They appeared to be one
              render behind.
            </p>
            <strong>
              <p className="solution-title">SOLUTION:</p>
            </strong>
            <ul className="solution-list">
              <li>
                I placed a useEffect hook at the top level of the component
                tree. The state variable that held the information for the
                display of the calculator, which was dependent on the input of
                the buttons, was used as a dependency. With each new input, this
                triggered the useEffect hook which held a state setter,
                resulting in the display information updating in real time.
              </li>
            </ul>
            <div className="main-image-two" id="solution-img">
              <img
                src={challenge}
                height="100%"
                width="100%"
                alt=""
                style={{ borderRadius: 15 }}
              />
            </div>
          </section>

          <section className="result">
            <h1 className="section-titles">Result:</h1>
            <ul className="result-list">
              <li>
                A fully responsive calculator web application built with React.
              </li>
              <li>React was used to create the front-end architecture.</li>
              <li>The overall UI was styled with Vanilla CSS.</li>
            </ul>
          </section>

          <section className="what-i-learnt">
            <h1 style={{ marginTop: 20, fontSize: 30 }}>What I learnt:</h1>
            <ul className="i-learnt-list">
              <li>How to manipulate the DOM using JavaScript.</li>
              <li>How to manage Inputs & Outputs.</li>
              <li>How to use array methods such as: .filter, .includes etc.</li>
              <li>How to create responsive designs using flexbox and grids.</li>
              <li>How to make a responsive design using CSS3.</li>
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
    </>
  );
}
