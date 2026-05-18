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
          <br /><b><u>Backend</u></b> and <b><u>DevOps</u></b> enthusiast with 3 years of experience building scalable <b><u>serverless APIs</u></b>, <b><u>microservices</u></b>, and <b><u>cloud-native</u></b> applications on <b><u>AWS</u></b>. Skilled in <b><u>Node.js</u></b>, <b><u>JavaScript</u></b>, <b><u>MongoDB</u></b>, <b><u>Python</u></b>, <b><u>SQL</u></b>, <b><u>Redis</u></b>, <b><u>DynamoDB</u></b>, and AWS services including <b><u>Lambda</u></b>, <b><u>API Gateway</u></b>, <b><u>S3</u></b>, <b><u>ECS</u></b>, <b><u>CloudFront</u></b>, <b><u>Glue</u></b>, <b><u>Athena</u></b> and etc.
        </div>
        <div className="about-photo">
          <img src={require("../../../Pics/Coding.webp")} alt="pic" className="picture" />
        </div>
      </div>
    </div>
  );
}

export default About;
