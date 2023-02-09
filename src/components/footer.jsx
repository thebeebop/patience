import "../style/footer.css";
import linkedin from "../images/social-icons/linkedin.png";
import twitter from "../images/social-icons/twitter.png";
import github from "../images/Tech-images/github.jpg";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-title-container">
          <p className="get-in-touch">Get in touch:</p>
          <h2 className="footer-title">Let's work together</h2>
          <p className="footer-sub-title">
            If you think I'm a right fit for your company, feel free to reach
            out to me!
          </p>
        </div>

        <a
          href="mailto: lewis.woods16@outlook.com"
          style={{ textDecoration: "none", color: "black" }}
          id="footer-button"
        >
          <button className="footer-button">lewis.woods16@outlook.com</button>
        </a>
        <div className="footer-p-container">
          <div className="footer-logos-container">
            <div className="footer-logos">
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="https://www.linkedin.com/in/lewis-woods-240046191/"
                target="blank"
              >
                <img src={linkedin} height="100%" width="100%" />
              </a>
            </div>
            <div className="footer-logos">
              <a href="https://twitter.com/LewisWoods0" target="blank">
                <img src={twitter} height="100%" width="100%" />
              </a>
            </div>
            <div className="footer-logos">
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="https://github.com/thebeebop"
                target="blank"
              >
                <img src={github} height="100%" width="100%" />
              </a>
            </div>
          </div>
          <p className="footer-p">
            © 2023 All rights reserved -{" "}
            <strong>Designed and Coded by Lewis Woods</strong>{" "}
          </p>
        </div>
      </footer>
    </>
  );
}
