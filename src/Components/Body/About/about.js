import React from "react";
import SocialContact from "../../Common/Social Contact/SocialContact";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello there 👋, I am
          <br /> <span className="info-name">Aniruddh Patil</span> .
          <br />I love experimenting with the web.
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
