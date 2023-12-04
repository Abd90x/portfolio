import hero from "../assets/imgs/hero-img.svg";
import React from "react";
import { HiDocumentDownload } from "react-icons/hi";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-section">
          <div className="hero-text">
            <h1>
              Welcome To <span className="name">Abdellatif</span> Portfolio
            </h1>
            <p>
              An intellectually curious and self-motivated computer information
              system graduate with a passion for technology seeking a meaningful
              role to experience and looking for new opportunities to learn.
            </p>
            <a
              className="main-btn"
              href="https://drive.google.com/file/d/1bNQeq8FPyrisxtL0E1mQv57J5vTLHAsx/view?usp=sharing"
            >
              Download CV
              <HiDocumentDownload />
            </a>
          </div>
          <div className="hero-img">
            <img src={hero} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
