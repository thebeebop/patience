import "../style/contact.css";
import github from "../images/Tech-images/github.jpg";
import linkedIn from "../images/social-icons/linkedin.png";
import email from "../images/small icons/email.png";
import phone from "../images/small icons/phone.png";

export default function Contact() {
  return (
    <>
      <div className="mother-container-about">
        <div className="title">
          <h1 className="contact-title">Thanks for stopping by!</h1>
          <h2 className="contact-sub-title">
            If you are interested in working with me, you can contact me via:
          </h2>
        </div>

        <div className="background">
          <div className="grid">
            <div className="card-small" id="email">
              <div className="email-logo">
                <img src={email} height="100%" width="100%" />
              </div>
              <p>lewis.woods16@outlook.com</p>
            </div>
            <div className="card-small" id="phone">
              <div className="phone-logo">
                <img src={phone} height="100%" width="100%" />
              </div>
              <p>07896067711</p>
            </div>

            <a
              style={{ textDecoration: "none", color: "black" }}
              href="https://github.com/thebeebop"
              target="blank"
            >
              <div className="card-small" id="github">
                <div className="phone-logo">
                  <img src={github} height="100%" width="100%" />
                </div>
                <p>GitHub</p>
              </div>
            </a>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="https://www.linkedin.com/in/lewis-woods-240046191/"
              target="blank"
            >
              <div className="card-small" id="linked-in">
                <div className="phone-logo">
                  <img src={linkedIn} height="100%" width="100%" />
                </div>
                <p>LinkedIn</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
