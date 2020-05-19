import React, {
  // useState, setState,
  Component,
} from "react";
import { Button } from "react-bootstrap";
import WelcomePage from "./WelcomePage";
import Dashboard from "./Dashboard";
import axios from "axios";

class ProfilePage extends Component {
  //state here for saving the information and sending it to the Backend

  static getDerivedStateFromProps(nextProps) {
    return {
      startpoint: nextProps.startpoint,
      endpoint: nextProps.endpoint,
      kilometer: nextProps.kilometer,
      co2emission: parseFloat(
        (parseInt(nextProps.kilometer) * 203.182) / 1000
      ).toFixed(2),
      showRouteInfo: nextProps.showRouteInfo,
    };
  }

  calculate = () => {
    const str = this.state.kilometer;
    const sliced = parseFloat(str.split("km"));
    console.log("Co2 logic", sliced);
  };

  // routeInfo = (event) => {
  //   if (this.state.startpoint && this.state.endpoint && this.state.kilometer) {
  //     this.setState({ showRouteInfo: true });
  //   } else {
  //     this.setState({ showRouteInfo: false });
  //   }
  // };

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
        //this.props.getData();
        console.log("CO2 Data:", this.state.co2emission);
        this.props.getData();
        
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

  // handleChange = (event) => {

  //   //event.preventDefault()
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   console.log(event);
  //   console.log(event.target.name);
  //   console.log(event.target.value);
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  render() {
    console.log("Banana", this.state);
    return (
      <div className="layout">
        <WelcomePage />
        <Dashboard />

        <div>
          {this.state.showRouteInfo ? (
            <div>
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
        </div>

        {/* <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="startpoint">Startpoint: </Form.Label>
            <Form.Control
              type="text"
              name="startpoint"
              value={this.state.startpoint}
              onChange={this.handleChange}
              id="startpoint"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="endpoint">Endpoint: </Form.Label>
            <Form.Control
              type="text"
              name="endpoint"
              value={this.state.endpoint}
              onChange={this.handleChange}
              id="endpoint"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="kilometres">Kilometer: </Form.Label>
            <Form.Control
              type="text"
              name="kilometer"
              value={this.state.kilometer}
              onChange={this.handleChange}
              id="kilometer"
            />
          </Form.Group> */}
        {/* <Button type="submit">Save</Button> */}
        {/* </Form> */}
      </div>
    );
  }
}

export default ProfilePage;
