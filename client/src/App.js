import React from "react";

import ReactMapGL from "react-map-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import mapboxgl from "mapbox-gl";

//

import "./App.css";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";

// import { Image } from 'react-native';
import axios from "axios";

import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Routes from "./components/Routes";
import RouteDetails from "./components/RouteDetails";
import ProfilePage from "./components/ProfilePage";

class App extends React.Component {
  state = {
    user: this.props.user,
    showButton: false,
    startpoint: "",
    endpoint: "",
    lat: 52.52,
    lng: 13.405,
    zoom: 13,
    kilometer: "",
    routes: [],
    showRouteInfo: false,
  };

  showRouteInfo = () => {
    this.setState({ showRouteInfo: true });
  };

  componentDidMount = () => {
    this.getData();
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-79.4512, 43.6568],
      zoom: 13,
    });

    map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: "metric",
        profile: "mapbox/cycling",
      }),

      "top-left"
    );
    map.addControl(new mapboxgl.NavigationControl());

    setInterval(() => {
      const routeEle = document.querySelector(
        ".mapbox-directions-route-summary > h1"
      );
      if (routeEle && !this.state.showButton && !this.state.buttonClick) {
        this.setState({
          showButton: true,
        });
      } else if (!routeEle && this.state.showButton) {
        this.setState({
          showButton: false,
        });
      }
    }, 500);
  };

  getRoute = (event) => {
    event.preventDefault();
    const kilometer = document.querySelector(
      ".mapbox-directions-route-summary > h1"
    ).innerHTML;
    const fromToEle = document.getElementsByClassName("mapboxgl-ctrl-geocoder");
    const startpoint = fromToEle[0].querySelector("input").value;
    const endpoint = fromToEle[1].querySelector("input").value;

    this.setState({
      startpoint: startpoint,
      endpoint: endpoint,
      kilometer: kilometer,
      showButton: false,
      buttonClick: true,
    });

    this.showRouteInfo();
  };

  closeShowRouteInfo = () => {
    this.setState({ showRouteInfo: false });
  };

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  getData = () => {
    axios
      .get("/api/routes")
      .then((response) => {
        console.log("the routes", response);
        const fromToEle = document.getElementsByClassName(
          "geocoder-icon-close"
        );
        console.log("hello", fromToEle);
        fromToEle[0].click();
        fromToEle[1].click();

        this.setState({
          routes: response.data.reverse(),
          buttonClick: false,
          startpoint: "",
          endpoint: "",
          kilometer: "",
        });
        console.log("routes:", this.state.routes);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // let image=new Image();
  // image.src='./public/baum.jpg';
  //  document.getElementsByClassName('trees').appenChild(imgage)};

  // console.log('Trees:',treesToPlant)

  // console.log('Trees:',treesToPlant)

  render() {
    console.log("Heeeiiiii", this.state.user);

    return (
      <div className="App">
        <Navbar user={this.state.user} setUser={this.setUser} />

        <div className="pageContent">
          <div
            id="map"
            className="map"
            borderStyle="double"
            style={this.state.user ? {} : { display: "none" }}
          >
            <ReactMapGL
              {...this.state.viewport}
              onViewportChange={(viewport) => this.setState(viewport)}
              mapboxApiAccessToken="pk.eyJ1IjoidmljdG9yaWF0b3JpYSIsImEiOiJja2EzbHVrMnowMzBzM2tyd2VsNnI2YnFiIn0.rZpPyrN5hdNxsnVtAWWCOQ"
            ></ReactMapGL>
          </div>

          <div className="layout">
            {this.state.showButton ? (
              <button
                className="calculateCO2 animate__animated animate__bounce"
                onClick={this.getRoute}
              >
                Calculate CO2 for this route
              </button>
            ) : (
              ""
            )}
            {this.state.user ? (
              <ProtectedRoute
                exact
                path="/"
                user={this.state.user}
                startpoint={this.state.startpoint}
                endpoint={this.state.endpoint}
                kilometer={this.state.kilometer}
                getData={this.getData}
                showRouteInfo={this.state.showRouteInfo}
                closeShowRouteInfo={this.closeShowRouteInfo}
                routes={this.state.routes}
                // drawTrees={this.drawTrees}
                component={ProfilePage}
              />
            ) : (
              <Route
                exact
                path="/"
                render={(props) => (
                  <LandingPage user={this.state.user} {...props} />
                )}
              />
            )}

            <ProtectedRoute
              exact
              path="/routes"
              user={this.state.user}
              routes={this.state.routes}
              component={Routes}
            />

            <ProtectedRoute
              exact
              path="/routes/:id"
              user={this.state.user}
              getData={this.getData}
              component={RouteDetails}
            />

            <Route
              exact
              path="/signup"
              render={(props) => <Signup setUser={this.setUser} {...props} />}
            />
            <Route
              exact
              path="/login"
              render={(props) => <Login setUser={this.setUser} {...props} />}
            />
            {/* <ProtectedRoute
                //add protection of routes here

            <ProtectedRoute
              user={this.state.user}
              startpoint={this.state.startpoint}
              endpoint={this.state.endpoint}
              kilometer={this.state.kilometer}
              getData={this.getData}
              showRouteInfo={this.state.showRouteInfo}
              closeShowRouteInfo={this.closeShowRouteInfo}
              routes={this.state.routes}
              // drawTrees={this.drawTrees}
              component={ProfilePage}
            />

            <ProtectedRoute
              exact
              path="/routes"
              user={this.state.user}
              routes={this.state.routes}
              // getData={this.getData}
              component={Routes}
            />

            <ProtectedRoute
              exact
              path="/routes/:id"
              user={this.state.user}
              getData={this.getData}
              component={RouteDetails}
            />


            <Route
              exact
              path="/signup"
              render={(props) => <Signup setUser={this.setUser} {...props} />}
            />
            <Route
              exact
              path="/login"
              render={(props) => <Login setUser={this.setUser} {...props} />}
            />

            {/* </Switch> */}
            {/* <ProtectedRoute
                // add protection of routes here

                exact
                path="/dashboard"
                component={ProfilePage}
                render={(props) => (
                  <ProfilePage
                    {...props}
                    startpoint={this.state.startpoint}
                    endpoint={this.state.endpoint}
                    kilometer={this.state.kilometer}
                    getData={this.getData}
                    showRouteInfo={this.state.showRouteInfo}
                    closeShowRouteInfo={this.closeShowRouteInfo}
                    
                  />
                )}
              /> */}
            {/* </Switch>  */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
