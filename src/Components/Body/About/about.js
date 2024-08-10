import React from "react";
import SocialContact from "../../Common/Social Contact/SocialContact";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello there 👋, I am
          <br /> <span className="info-name">Aniruddh Patil</span>.
          <br />
          <br />I’m a <u>Backend</u> and <u>DevOps</u> enthusiast who thrives on using <u>Node.js</u>, <u>MongoDB</u>, <u>Redis</u>, <u>Serverless</u> and <u>AWS</u> to create cutting-edge solutions. With a strong Java background and a passion for innovation, I love exploring new tech and tackling exciting challenges in the web world.
        </div>
        <div className="about-photo">
          <img src={require("../../../Pics/Coding.png")} alt="pic" className="picture" />
        </div>
      </div>
      <div>
        <SocialContact />
      </div>
    </div>
  );
}

export default About;
