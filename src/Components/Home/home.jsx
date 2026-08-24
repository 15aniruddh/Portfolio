import React from "react";
import Header from "../Header/header";
import Body from "../Body/body";
import Footer from "../Footer/footer";
import useReveal from "../Common/hooks/useReveal";
import "./home.css";

function Home() {
  /* One observer drives every `.reveal` element on the page */
  useReveal();

  return (
    <div className="home">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
