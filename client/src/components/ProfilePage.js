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
  }

  refreshDasboardAfterSaving() {
      axios
        .get("api/routes")
        .then((response) => {
          let totalKilometer = 0;
          let totalCo2Saved = 0;
          let totalTreeCapacitySaved = 0;
          
            for (let i=0; i<response.data.length; i++){
              let singleKilometer = parseFloat(response.data[i].kilometer.split("km"))
              console.log(singleKilometer);
              totalKilometer += singleKilometer;
              totalCo2Saved += response.data[i].co2emission;
              console.log(totalCo2Saved);
            }
          console.log(totalKilometer);
          console.log(response.data);
          console.log(response.data[0].kilometer);

          this.setState({totalKilometer, totalCo2Saved, totalTreeCapacitySaved});
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
        this.refreshDasboardAfterSaving();
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
    //console.log("Banana", this.state);
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
        <h3>Here we will show the Dashboard</h3>
        <p>Total kilometers rode is {this.state.totalKilometer}</p>
        <p>{}</p>
        <p>Total CO2 saved</p>
        <p>tree capacity saved</p>

      </div>
    );
  }
}

export default ProfilePage;
