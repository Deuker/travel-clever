import React from "react";
// import MapView from "./components/MapView";
// import ResponseMap from "./components/ResponseMap";
// import TripReview from "./components/TripReview";
// import FilterPanel from "./components/FilterPanel";
import ReactMapGL from "react-map-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import mapboxgl from "mapbox-gl";
// import MapBoxGLDraw from '@mapbox/mapbox-gl-draw';
import "./App.css";
import { Route } from "react-router-dom";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoidmljdG9yaWF0b3JpYSIsImEiOiJja2EzbHVrMnowMzBzM2tyd2VsNnI2YnFiIn0.rZpPyrN5hdNxsnVtAWWCOQ";

class App extends React.Component {
  state = {
    user: this.props.user,
    showButton: false,
    origin: [],
    origin_name: "",
    destination: [],
    destination_name: "",
    map: null,
    draw: null,
    lat: 52.52,
    lng: 13.405,
    zoom: 13,
    uuid: "",
    duration: "",
    distance: "",
    coordinates: [],
    waypoints: [],
    reviewTrip: false,
    user: "",
  };

  componentDidMount = () => {
    console.log(this.state.lat, this.state.lng);
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-79.4512, 43.6568],
      zoom: 13,
    });

    // map.on("route", () => {
    //   console.log(this.state);
    //   this.setState({
    //     lng: map.getCenter().lng.toFixed(4),
    //     lat: map.getCenter().lat.toFixed(4),
    //     zoom: map.getZoom().toFixed(2),
    //   });
    // });
    map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: "metric",
        profile: "mapbox/cycling",
      }),

      "top-left"
    );
    map.addControl(new mapboxgl.NavigationControl());

    //   map.getDirections([
    //     origin,
    //     destination
    //   ], {
    //     profile: 'mapbox.driving',
    //     instructions: 'html',
    //     alternatives: false,
    //     geometry: 'geojson'
    // }).then(function(results) {
    //   let { origin, destination, routes } = results
    //   this.setState({
    //     directions: routes[0].geometry.coordinates
    //   })
    // })
    setInterval(() => {
      const routeEle = document.querySelector(
        ".mapbox-directions-route-summary > h1"
      );
      if (routeEle && !this.state.showButton) {
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
  getRoute = () => {
    console.log(
      "distance: ",
      document.querySelector(".mapbox-directions-route-summary > h1").innerHTML
    );

    const fromToEle = document.getElementsByClassName("mapboxgl-ctrl-geocoder");

    console.log("from: ", fromToEle[0].querySelector("input").value);

    console.log("to: ", fromToEle[1].querySelector("input").value);
  };

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} setUser={this.setUser} />
        {/* <div><MapView/></div> */}
        {/* <ResponseMap />
        <FilterPanel /> */}
        <div class="map">
          <div
            ref={(el) => (this.mapContainer = el)}
            className="mapContainer"
          />
          <div>
            <ReactMapGL
              {...this.state.viewport}
              onViewportChange={(viewport) => this.setState(viewport)}
              mapboxApiAccessToken="pk.eyJ1IjoidmljdG9yaWF0b3JpYSIsImEiOiJja2EzbHVrMnowMzBzM2tyd2VsNnI2YnFiIn0.rZpPyrN5hdNxsnVtAWWCOQ"
            ></ReactMapGL>
          </div>
          {this.state.showButton ? (
            <button onClick={this.getRoute}>BUTTON</button>
          ) : (
            ""
          )}

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
        </div>
      </div>
    );
  }
}

export default App;
