import React from "react";
import "./LandingPage.css";
// import navimage from "../images/cycle_now.png";

const LandingPage = () => {
  return (
    <div className="Landingpage">
      <nav>
        <div className="containerforHeader">
          <div className="Banner">
            <h2>Cycle now!</h2>
            <p>get a better understanding of your cycling impact</p>
          </div>
        </div>
      </nav>
      <header></header>
      {/* <header></header> */}

      <div className="CycleInfo">
        <img src="images/new_cycle_now_graph.png" alt="cycleinfo"></img>
      </div>

      <h1>Do you actually know...</h1>
      <div className="DoYouKnow">
        <div className="DoYouKnowText">
          <img src="images/icontreetoco2.png" alt="treetoco2" className="smallImages"></img>
          <p>...how much co2 a tree compensates per year?</p>
          <img
            src="images/iconhowmanykilometers.png"
            alt="howmanykilometers"
            className="smallImages"
          ></img>
          <p>...how much kilometers bike you ride per year?</p>
          <img src="/images/iconcartobike.png" alt="carttobike" className="smallImages"></img>
          <p>...how much co2 you save while cycling compared to driving?</p>
          {/* <a href="/signup">Get Answers</a> */}
        </div>
        <img src="images/doyouactuallyknow.jpg"></img>
      </div>
    </div>
  );
};

export default LandingPage;
