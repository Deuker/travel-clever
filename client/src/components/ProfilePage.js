import React, { Component } from "react";
// import { Button } from "react-bootstrap";
// import WelcomePage from "./WelcomePage";
import axios from "axios";
import "./ProfilePage.css";

import Trees from "./Trees";

class ProfilePage extends Component {
  //state here for saving the information and sending it to the Backend

  state = {
    totalKilometer: "0",
    totalCo2Saved: "0",
    totalTreeCapacitySaved: "0",
    //startpoint: this.props.startpoint,
    // endpoint: this.props.endpoint,
    // kilometer: this.props.kilometer,
    //
    //showInfo: false,
    co2emission: "",
    oneWay: true,
    returning: false,
  };

  componentDidMount() {
    this.refreshDasboardAfterSaving();
    this.props.getData();
  }

  refreshDasboardAfterSaving() {
    axios
      .get("api/routes")
      .then((response) => {
        let totalKilometer = 0;
        let totalCo2Saved = 0;
        let totalTreeCapacitySaved = 0;

        for (let i = 0; i < response.data.length; i++) {
          let singleKilometer = parseFloat(
            response.data[i].kilometer.split("km")
          );
          let singleCo2 = parseFloat(response.data[i].co2emission);
          console.log(singleKilometer);
          totalKilometer += singleKilometer;
          totalCo2Saved += singleCo2;
          totalTreeCapacitySaved = (totalCo2Saved / 23.2).toFixed(1);
          console.log(totalCo2Saved);
        }
        console.log(totalKilometer);
        console.log(response.data);
        console.log(response.data[0].kilometer);

        this.setState({
          totalKilometer,
          totalCo2Saved,
          totalTreeCapacitySaved,
        });
        this.props.getData();
      })

      .catch((error) => {
        console.log(error);
      });
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      startpoint: nextProps.startpoint,
      endpoint: nextProps.endpoint,
      kilometer: nextProps.kilometer,
      co2emission: parseFloat(
        (parseInt(nextProps.kilometer) * 203.182) / 1000
      ).toFixed(2),
      showInfo: true,

      showRouteInfo: nextProps.showRouteInfo,
    };
  }

  calculate = () => {
    const str = this.state.kilometer;
    const sliced = parseFloat(str.split("km"));
    console.log("Co2 logic", sliced);
  };

  handleSubmit = (event) => {
    console.log(this.state.oneWay);
    event.preventDefault();
    const data = this.props;
    console.log("Final data is: ", data);
    //axios request goes here

    axios
      .post("/api/routes", {
        startpoint: this.state.startpoint,
        endpoint: this.state.endpoint,
        kilometer: this.state.returning
          ? parseFloat(this.state.kilometer.split("km")) * 2 + "km"
          : this.state.kilometer,
        co2emission:this.state.returning ? parseFloat(this.state.co2emission)*2 : this.state.co2emission,
        oneWay: this.state.oneWay,
        returning: this.state.returning,
      })
      .then(() => {
        this.refreshDasboardAfterSaving();
        console.log("CO2 Data:", this.state.co2emission);
        this.props.getData();
        this.props.closeShowRouteInfo();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleCheckboxOneChange = (event) => {
    if (this.state.oneWay) {
      this.setState({
        oneWay: false,
        returning: true,
      });
    } else {
      this.setState({
        oneWay: event.target.checked,
        returning: false,
      });
    }
  };
  handleCheckboxTwoChange = (event) => {
    if (this.state.returning) {
      this.setState({
        oneWay: true,
        returning: false,
      });
    } else {
      this.setState({
        oneWay: false,
        returning: event.target.checked,
      });
    }
  };

  render() {
    //console.log("Banana", this.state);
    return (
      <React.Fragment>
        {/* <Dashboard /> */}

        {this.state.showRouteInfo ? (
          <div className="routeDetails">
            <h3>Your Search Route details:</h3>
            <div className="checkboxContainer">
              <div className="container">
                <label for="oneWay">
                  one way
                  <input
                    type="checkbox"
                    onChange={this.handleCheckboxOneChange}
                    id="oneWay"
                    name="oneWay"
                    checked={this.state.oneWay}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>

              <div className="container">
                <label for="return">
                  return
                  <input
                    type="checkbox"
                    onChange={this.handleCheckboxTwoChange}
                    id="return"
                    name="return"
                    checked={this.state.returning}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
            <p>
              <b>From: </b>
              <span className="numbers1">{this.state.startpoint}</span>
            </p>
            <p>
              <b>To:</b>
              <span className="numbers1"> {this.state.endpoint}</span>
            </p>
            <p>
              <b>Distance: </b>
              <span className="numbers1">{this.state.kilometer}</span>
            </p>
            <p>
              <b>CO2: </b>
              <span className="numbers">{this.state.co2emission}kg</span>
            </p>
            <button
              className="saveRouteBtn animate__animated animate__bounce"
              onClick={this.handleSubmit}
              type="button"
            >
              Save this Route
            </button>
          </div>
        ) : (
          ""
        )}

        <div className="dashboard">
          <h3>Your travel Dashboard</h3>
          <p>
            <b>Total kilometers cycled:</b>{" "}
            <span className="numbers">
              {parseFloat(this.state.totalKilometer).toFixed(2)}
            </span>{" "}
            km
          </p>

          <p>
            <b>Total CO2 saved:</b>{" "}
            <span className="numbers">
              {parseFloat(this.state.totalCo2Saved).toFixed(2)}
            </span>{" "}
            kg
          </p>
          <p>
            <b>Trees to plant to offset CO2 footprint:</b>{" "}
            <span className="numbers">
              {parseFloat(this.state.totalTreeCapacitySaved).toFixed(2)}
            </span>{" "}
            trees
          </p>

          <Trees routes={this.props.routes} />
        </div>
      </React.Fragment>
    );
  }
}

export default ProfilePage;
