import React, {
  // useState, setState,
  Component,
} from "react";
import { Button } from "react-bootstrap";

// import WelcomePage from "./WelcomePage";
// import Dashboard from "./Dashboard";
import axios from "axios";
import "./ProfilePage.css";

import Trees from './Trees';


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
    event.preventDefault();
    const data = this.props;
    console.log("Final data is: ", data);
    //axios request goes here

    axios
      .post("/api/routes", {
        startpoint: this.state.startpoint,
        endpoint: this.state.endpoint,
        kilometer: this.state.kilometer,
        co2emission: this.state.co2emission,
      })
      .then(() => {
        this.refreshDasboardAfterSaving();
        console.log("CO2 Data:", this.state.co2emission);
        this.props.getData();

        this.props.closeShowRouteInfo();
     


        // this.setState({

        //   startpoint: "",
        //   endpoint: "",
        //   kilometer: "",
        // });

        this.props.closeShowRouteInfo();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    //console.log("Banana", this.state);
    return (
      <div>
        {/* <Dashboard /> */}

        {this.state.showRouteInfo ? (
          <div className="routeDetails">
            <h3>Your Search Route details:</h3>
            <div>From: {this.state.startpoint}</div>
            <div>To: {this.state.endpoint}</div>
            <div>Distance: {this.state.kilometer}</div>
            <div>CO2: {this.state.co2emission}kg</div>
            <Button onClick={this.handleSubmit} type="button">
              Save this Route
            </Button>
          </div>
        ) : (
          ""
        )}

        <div className="dashboard">
          <h3>Your travel Dashboard</h3>
          <p>Total kilometers cycled {this.state.totalKilometer}km</p>
          <p>{}</p>
          <p>Total CO2 saved: {this.state.totalCo2Saved} kg</p>
          <p>
            Amount of trees saved: {this.state.totalTreeCapacitySaved} trees
          </p>

        

          <Trees routes={this.props.routes}/>

        </div>
      </div>
    );
  }
}

export default ProfilePage;
