import React from "react";
import "./LandingPage.css";
// import navimage from "../images/cycle_now.png";

const LandingPage = () => {
  return (
    <div className="Landingpage">
      <nav>
        <div className="containerforHeader">
          <div className="topnavHeader">
            <div className="menuforHeader">
              <img
                src="images/white_bike_transparent.png"
                href="#"
                width="70"
                height="50"
                alt="cam"
              />
              <a href="/login">Login</a>
              <a href="/signup">Signup</a>
              <a href="#">About</a>
              <div className="Banner">
                <h2>cycle now!</h2>
                <p>get a better understanding of your cycling impact</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <header></header>
      {/* <header></header> */}

      <div className="CycleInfo">
        <img src="images/cycle_today_transparent_new.png" alt="cycleinfo"></img>
      </div>
      <h1>Do you actually know...</h1>
      <div className="DoYouKnow">
        <img src="images/doyouactuallyknow.jpg"></img>
        <div className="DoYouKnowText">
          <p>...how much co2 a tree compensates per year?</p>
          <p>...how much kilometers bike you ride per year?</p>
          <p>...how much co2 you save while cycling compared to driving?</p>
          <a href="/signup">Get Answers</a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
