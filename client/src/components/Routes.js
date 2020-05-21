import React, { Component } from "react";
import RoutesList from "./RoutesList";


export default class Routes extends Component {
  state = {
    routes: [],
  };

  // componentDidMount = () => {
  //   this.getData();
  // };

  // getData = () => {
  //   axios
  //     .get("/api/routes")
  //     .then((response) => {
  //       console.log(response);
  //       let revercedResponse = response.reverce();
  //       this.setState({
  //         routes: revercedResponse.data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

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
    return <RoutesList  routes={this.props.routes} />;
  }
}
