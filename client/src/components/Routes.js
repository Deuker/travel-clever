
import React, { Component } from "react";
// import axios from "axios";
import RoutesList from "./RoutesList";
// import Dashboard from "./Dashboard";
// import ProfilePage from "./ProfilePage";


export default class Routes extends Component {
 

  // componentDidMount = () => {
  //   this.getData();
  // };

  // getData = () => {
  //   axios
  //     .get("/api/routes")
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({
  //         routes: response.data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  render() {
    return (
      <div className="routes-container">
        <RoutesList routes={this.props.routes} />

        {/* <Dashboard /> */}
        {/* <ProfilePage getData={this.getData} /> */}

      </div>
    );
  }
}
