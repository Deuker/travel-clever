import React, { Component } from "react";

import axios from "axios";
import "./RouteDetails.css";

export default class RoutesDetails extends Component {
  state = {
    route: null,
    startpoint: "",
    endpoint: "",
    kilometer: "",
    co2emission: "",
    owner: "",
    error: null,
  };

  componentDidMount() {
    this.newRoute();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.match.params?.id !== this.state.routeId) {
      this.newRoute(nextProps.match.params.id);
    }
  }

  newRoute = (newId) => {
    const routeId = newId ? newId : this.props.match.params.id;

    axios
      .get(`/api/routes/${routeId}`)
      .then((response) => {
        const route = response.data;
        const startpoint = response.data.startpoint;
        const endpoint = response.data.endpoint;
        const kilometer = response.data.kilometer;
        console.log(kilometer);
        const co2emission = response.data.co2emission;
        const owner = response.data.owner;

        this.setState({
          route,
          startpoint,
          endpoint,
          kilometer,
          co2emission,
          owner,
          routeId,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteRoute = () => {
    const id = this.props.match.params.id;
    axios
      .delete(`/api/routes/${id}`)
      .then(() => {
        this.props.getData();
        this.props.history.push("/routes");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (this.state.error) return <div>{this.state.error}</div>;
    if (!this.state.route) return <></>;

    let allowedToDelete = false;
    const user = this.props.user;
    if (user) allowedToDelete = true;

    return (
      <div className="singleRoute">
        <p className="singleRouteP">
          <span className="numbers1">
            {this.state.route.startpoint} - {this.state.endpoint}
          </span>{" "}
          ,<br></br>
          Distance:<span className="numbers1">{this.state.kilometer}</span>{" "}
          <br></br>CO2 impact:{" "}
          <span className="numbers1">{this.state.co2emission}</span> kg
        </p>
        {allowedToDelete && (
          <button
            class="deleteRouteBtn animate__animated animate__bounce"
            variant="danger"
            onClick={this.deleteRoute}
          >
            Delete this route
          </button>
        )}
      </div>
    );
  }
}
