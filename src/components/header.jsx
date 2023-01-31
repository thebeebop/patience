import { Link } from "react-router-dom";
import "../style/header.css";
import twitter from "../images/social-icons/twitter.png";
export default function Header() {
  return (
    <>
      <nav>
        <ul className="nav-bar">
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <p>Projects</p>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              <p>Contact</p>
            </Link>
          </li>
          <li>
            <a href="https://twitter.com/LewisWoods0" target="blank">
              <img src={twitter} height="23px" width="23px" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
