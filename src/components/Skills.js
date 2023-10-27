import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import Rocket from "../assets/imgs/rocket.svg";

function Skill() {
  return (
    <>
      <span className="skill html">
        <FaHtml5 />
        HTML
      </span>
      <span className="skill css">
        <FaCss3Alt />
        CSS
      </span>
      <span className="skill js">
        <IoLogoJavascript />
        JavaScript
      </span>
      <span className="skill react">
        <FaReact />
        React.Js
      </span>
      <span className="skill bootstrap">
        <FaBootstrap />
        Bootstrap
      </span>
      <span className="skill github">
        <FaGithub />
        Github
      </span>
      <span className="skill git">
        <FaGitAlt />
        Git
      </span>
    </>
  );
}

function Skills() {
  return (
    <section className="skills" id="skills">
      <h1 className="section-header">
        <span>&lt;</span> Skills <span>/&gt;</span>
      </h1>
      <div className="container">
        <div className="skills-section">
          <div className="skills-progress">
            <div className="prog">
              <h3>
                <span>
                  <FaHtml5 /> HTML
                </span>
                <span className="percent">90%</span>
              </h3>
              <div className="progress">
                <span style={{ width: "90%" }}></span>
              </div>
            </div>
            <div className="prog">
              <h3>
                <span>
                  <FaCss3Alt /> CSS
                </span>{" "}
                <span className="percent">85%</span>
              </h3>
              <div className="progress">
                <span style={{ width: "85%" }}></span>
              </div>
            </div>
            <div className="prog">
              <h3>
                <span>
                  <IoLogoJavascript /> JavaScript
                </span>
                <span className="percent">80%</span>
              </h3>
              <div className="progress">
                <span style={{ width: "80%" }}></span>
              </div>
            </div>
            <div className="prog">
              <h3>
                <span>
                  <FaReact /> React.Js
                </span>
                <span className="percent">60%</span>
              </h3>
              <div className="progress">
                <span style={{ width: "60%" }}></span>
              </div>
            </div>
            <div className="prog">
              <h3>
                <span>
                  <FaBootstrap /> Bootstrap
                </span>
                <span className="percent">70%</span>
              </h3>
              <div className="progress">
                <span style={{ width: "70%" }}></span>
              </div>
            </div>
          </div>
          <div className="skills-img">
            <img src={Rocket} alt="Rocket" />
          </div>
        </div>
      </div>
      <div className="skills-holder">
        <div className="skills-bar">
          <Skill />
          <Skill />
          <Skill />
        </div>
      </div>
    </section>
  );
}

export default Skills;
