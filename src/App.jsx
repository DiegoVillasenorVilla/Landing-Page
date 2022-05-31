import React from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import bg from "./assets/bg-main-desktop.png";
import bgpatter from "./assets/bg-pattern-1.svg";
import bgpatter2 from "./assets/bg-pattern-2.svg";
import smartphone from "./assets/illustration-app.png";
import apple from "./assets/icon-apple.svg";
import android from "./assets/icon-android.svg";
import facebook from "./assets/icon-facebook.svg";
import instagram from "./assets/icon-instagram.svg";
import twitter from "./assets/icon-twitter.svg";

function App() {
  return (
    <div className="App">
      

      <div className="header-container">
        <img src={logo} alt="logo" className="logo-image" />
        <img src={bgpatter} alt="pattern" className="pattern-one" />
        <h1 className="title">
          {" "}
          We make your music <br />
          sound extraordinary.
        </h1>
        <p className="paragraph">
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your <br />
          music sounds with a professional grade parametric EQ & volume mixer.
          Control bass, mids, <br />
          treble, gain control, reverb, and more!
        </p>
      </div>

      <div className="middle-container">
        <div className="background-container">
          <img src={bgpatter2} alt="pattern" className="pattern-second" />
          <img src={smartphone} alt="smartphone" className="phone-image" />
          <div className="superior-container">
            <h2 className="title-container">Premium EQ</h2>
            <p className="p-container">
              Get expert-level control with a <br />
              robust equalizer, volume mixer, and <br />
              spatial audio. Take your listening <br />
              experience to a whole new level and <br />
              access all our incredible features!
            </p>
            <span className="price"> $4</span>
            <span className="month"> / month</span>

            <button className="apple-button">
              <img src={apple} className="apple-icon" />
              iOS Download
            </button>
            <button className="android-button">
              <img src={android} className="android-icon" />
              Android Download
            </button>
          </div>
        </div>
      </div>

      <div className="footer-container">
        <img src={logo} alt="logo" className="footer-logo"/>
        <p className="rights">
          All rights reserved © Equalizer 2021
          <br />
          Have any problems? Contact us via social media or <br />
          email us at equalizer@example.com
        </p>
        <img src={facebook}  alt="Facebook" className="facebook-logo"/>
        <img src={instagram}  alt="Instagram" className="instagram-logo"/>
        <img src={twitter}  alt="Twitter" className="twitter-logo"/>
      </div>

    </div>
  );
}

export default App;
