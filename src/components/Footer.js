import React from "react";
import Logo from "../assets/imgs/Logo1.png";
import { FaCircleArrowRight } from "react-icons/fa6";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="about">
          <div className="footer-logo">
            <img src={Logo} alt="Abdellatif Logo" />
          </div>
          <div className="footer-text">
            Hi I'm Abdellatif Frontend Developer
          </div>
          <div className="social">
            Follow Me On Social Media:
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/abd90v/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/abd90x/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Abd90x"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Abd90V"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaXTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">
                Home <FaCircleArrowRight />
              </a>
            </li>
            <li>
              <a href="#skills">
                Skills <FaCircleArrowRight />
              </a>
            </li>
            <li>
              <a href="#projects">
                Projects <FaCircleArrowRight />
              </a>
            </li>
          </ul>
        </div>
        <div className="hire">
          <h1>Ready to Collaborate?</h1>
          <p>
            I'm eager to tackle new challenges and bring your web development
            goals to fruition.
          </p>
          <p>Let's create something remarkable together!</p>
          <a href="mailto:abd90v@gmail.com">
            <button className="main-btn">Hire Me!</button>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
