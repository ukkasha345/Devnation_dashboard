import React, { useState } from "react";

import "./style.css";

import Tabs from "../Tabs/Tabs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
function CourseMenu() {
  return (
    <div className="container">
      <section className="section1">
        <header>
          <div className="menu">
            <img src="/images/logo.png" alt="logo" className="logo" />
            <a href="/">Home</a>
            <a href="/">My Application</a>
            <a href="/">My Resume</a>
          </div>
          <div>
            <img src="/images/photo.png" alt="dp" className="dp" />
          </div>
        </header>
        <h1>Become A Senior Web App Developer</h1>
      </section>
      <section className="section2">
        <Tabs />
      </section>
      <div className="footer">
        <div>
          <p>© 2022 DevNation PTE Ltd.. All rights reserved.</p>
        </div>
        <div className="icons">
          <a href="https://www.facebook.com/thedevnation/">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>

          <a href="https://www.instagram.com/thedevnation_/">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>

          <a href="https://twitter.com/Devnation4">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>

          <a href="https://www.facebook.com/thedevnation/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CourseMenu;
