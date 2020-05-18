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
  constructor(props) {
    super(props);

    this.state = {
      startpoint: this.props.startpoint,
      endpoint: this.props.endpoint,
      kilometer: this.props.kilometer,
      showInfo: true,
    };
  }

  calculate = () => {
    const str = this.props.kilometer;
    const sliced = parseFloat(str.split("km"));
    console.log("Co2 logic", sliced);
  };
  //routeInfo = () => {
  //   if (this.props.startpoint && this.props.endpoint && this.props.kilometer) {
  //     this.setState({ showInfo: true });
  //   } else if (
  //     !this.props.startpoint &&
  //     !this.props.endpoint &&
  //     !this.props.kilometer
  //   ) {
  //     this.setState({ showInfo: false });
  //   }
  // };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.props;
    console.log("Final data is: ", data);
    //axios request goes here

    axios
      .post("/api/routes", {
        startpoint: this.props.startpoint,
        endpoint: this.props.endpoint,
        kilometer: this.props.kilometer,
      })
      .then(() => {
        this.setState({
          startpoint: "",
          endpoint: "",
          kilometer: "",
        });
        // this.props.getData();
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
    console.log(
      "Banana",
      this.props.startpoint,
      this.props,
      this.props.showInfo
    );
    return (
      <div>
        <h1>This represents the Profile Page</h1>
        <WelcomePage />
        <h3>Search Route:</h3>
        <div>
          {this.state.showInfo ? (
            <div>
              <div>From: {this.props.startpoint}</div>
              <div>To: {this.props.endpoint}</div>
              <div>Distance: {this.props.kilometer}</div>
              <div>CO2:{(this.props.kilometer * 200) / 1000}</div>
              <Button onClick={this.handleSubmit} type="submit">
                Save
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
        <Dashboard />
      </div>
    );
  }
}

export default ProfilePage;
