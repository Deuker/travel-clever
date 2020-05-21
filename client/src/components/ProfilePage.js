import React, {
  // useState, setState,
  Component,
} from "react";
// import { Button } from "react-bootstrap";

// import WelcomePage from "./WelcomePage";
// import Dashboard from "./Dashboard";
import axios from "axios";
import "./ProfilePage.css";

import Trees from "./Trees";

class ProfilePage extends Component {
  //state here for saving the information and sending it to the Backend

  state = {
    totalKilometer: "",
    totalCo2Saved: "",
    totalTreeCapacitySaved: "",
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

        for (let i = 0; i < response.data.length; i++)
         {
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

  // componentDidMount = () => {
  //   this.props.getData();
  // }

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
        co2emission: this.state.co2emission,
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
    // console.log(this.state.oneWay)
    //  if(this.state.oneWay){
    //   document.getElementById("oneWay").disabled = true;
    //  }else if(this.state.oneWay===false){
    //   document.getElementById("oneWay").disabled = false;
    //  }

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
      //  this.uncheck()
    }
  };
  handleCheckboxTwoChange = (event) => {
    // if(this.state.return){
    //   document.getElementById("return").disabled = true;
    // }else if(this.state.return===false){
    //   document.getElementById("return").disabled = false;
    //  }
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
    //  this.uncheck()
  };

  uncheck = () => {
    if (this.state.oneWay) {
      this.setState({
        returning: false,
      });
    } else if (this.state.returning) {
      this.setState({
        oneWay: false,
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
            <label>one way</label>
            <input
              type="checkbox"
              onChange={this.handleCheckboxOneChange}
              id="oneWay"
              checked={this.state.oneWay}
            />
            <label>return</label>
            <input
              type="checkbox"
              onChange={this.handleCheckboxTwoChange}
              id="return"
              checked={this.state.returning}
            />
            <div>From: {this.state.startpoint}</div>
            <div>To: {this.state.endpoint}</div>
            <div>Distance: {this.state.kilometer}</div>
            <div>CO2: {this.state.co2emission}kg</div>
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
            <b>Total kilometers cycled:</b> {this.state.totalKilometer}km
          </p>

          <p>
            <b>Total CO2 saved:</b> {this.state.totalCo2Saved} kg
          </p>
          <p>
            <b>Trees to plant to offset CO2 footprint:</b>{" "}
            {this.state.totalTreeCapacitySaved}
          </p>

          <Trees routes={this.props.routes} />
        </div>
      </React.Fragment>
    );
  }
}

export default ProfilePage;
