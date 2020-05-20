import React from "react";
import "./LandingPage.css";
// import navimage from "../images/cycle_now.png";

const LandingPage = () => {
  return (
    <div className="Landingpage">
      <nav>
        <div className="bg-img">
          <div className="containerforHeader">
            <div className="topnavHeader">
              <div className="menuforHeader">
                <a href="#">Login</a>
                <a href="#">Signup</a>
                <a href="#">About</a>
              </div>
            </div>
          </div>
          <div className="Banner">
            <h2>cycle now!</h2>
            <p>get a better understanding of your cycling impact</p>
          </div>
        </div>
      </nav>

      <header></header>
      <img src="images/whitebike.png" width="70" height="50" alt="cam" />

      <div className="CycleInfo">
        <img src="/cycle_now.png" alt="cycleinfo"></img>
      </div>
      <div className="DoYouKnow">
        <h4>Do you actually know...</h4>
        <p>...how much co2 a tree compensates per year?</p>
        <p>...how much kilometers bike you ride per year?</p>
        <p>...how much co2 you save while cycling?</p>
        <p>get answers</p>
      </div>
      <div className="Cyclist of the week">
        <h3>become cyclist of the week</h3>
      </div>
    </div>
  );
};

export default LandingPage;
