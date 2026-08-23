import React from "react";
import { AboutHighlights } from "../../Data/Profile";
import "./about.css";

function About() {
  return (
    <div className="container section about">
      <div className="section-head reveal">
        <span className="section-eyebrow">About me</span>
        <h2 className="section-title">
          Engineering that holds up <span className="text-gradient">in production</span>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-lead reveal rich">
          <p>
            I'm a <b><u>Backend</u></b> and <b><u>DevOps</u></b> enthusiast with three
            years of experience building scalable <b><u>serverless APIs</u></b>,{" "}
            <b><u>microservices</u></b> and <b><u>cloud-native</u></b> applications
            on <b><u>AWS</u></b>.
          </p>
          <p>
            Day to day that means <b><u>Node.js</u></b>, <b><u>JavaScript</u></b>,{" "}
            <b><u>MongoDB</u></b>, <b><u>Python</u></b>, <b><u>SQL</u></b>,{" "}
            <b><u>Redis</u></b> and <b><u>DynamoDB</u></b>, alongside AWS services
            including <b><u>Lambda</u></b>, <b><u>API Gateway</u></b>,{" "}
            <b><u>S3</u></b>, <b><u>ECS</u></b>, <b><u>CloudFront</u></b>,{" "}
            <b><u>Glue</u></b> and <b><u>Athena</u></b>.
          </p>
          <p>
            What I care about most is the part users actually feel — response
            times, uptime and access that is secure without being in the way.
          </p>
        </div>

        <ul className="about-highlights">
          {AboutHighlights.map((item, index) => (
            <li
              key={item.title}
              className="card highlight-card reveal"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <span className="highlight-icon" aria-hidden="true">
                <i className={item.icon} />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
