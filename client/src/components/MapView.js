// import React from "react";
// import mapboxgl from "mapbox-gl";
// import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";

// // import "mapbox-gl/dist/mapbox-gl.css"; // Updating node module will keep css up to date.
// // import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css"; // Updating node module will keep css up to date.

// mapboxgl.accessToken =
//   "pk.eyJ1IjoidmljdG9yaWF0b3JpYSIsImEiOiJja2EzbHVrMnowMzBzM2tyd2VsNnI2YnFiIn0.rZpPyrN5hdNxsnVtAWWCOQ";

// export default class MapView extends React.Component {
//   componentDidMount() {
//     const { lng, lat, zoom } = {
//       lng: 13.454,
//       lat: 52.5158,
//       zoom: 13.4,
//     };

//     const map = new mapboxgl.Map({
//       container: this.mapContainer, // See https://blog.mapbox.com/mapbox-gl-js-react-764da6cc074a
//       style: "mapbox://styles/mapbox/streets-v9",
//       center: [lng, lat],
//       zoom,
//     });

//     var directions = new MapboxDirections({
//       accessToken: mapboxgl.accessToken,
//       unit: "metric",
//       profile: "mapbox/cycling",
//     });

//     map.addControl(directions, "top-left");
//   }

//   render() {
//     return (
//       <div className="map-wrapper">
//         <div ref={(el) => (this.mapContainer = el)} className="map" />
//       </div>
//     );
//   }
// }


import React, { Component } from "react";
// import ResponseMap from "./components/ResponseMap";
// import TripReview from "./components/TripReview";
// import FilterPanel from "./components/FilterPanel";
import ReactMapGL from "react-map-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import mapboxgl from "mapbox-gl";

export default class MapView extends Component{
    state={
        user: this.props.user,
        showButton: false,
        startpoint: "",
        endpoint: "",
        lat: 52.52,
        lng: 13.405,
        zoom: 13,
        distance: "",
      //  user: "",
    };

    componentDidMount = () => {
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
          const distance = document.querySelector(
            ".mapbox-directions-route-summary > h1"
          ).innerHTML;
          console.log("distance: ", distance);
      
          const fromToEle = document.getElementsByClassName("mapboxgl-ctrl-geocoder");
          const startpoint = fromToEle[0].querySelector("input").value;
          console.log("from: ", startpoint);
          const endpoint = fromToEle[1].querySelector("input").value;
          console.log("to: ", endpoint);
      
          this.setState({
            startpoint: startpoint,
            endpoint: endpoint,
            distance: distance,
          });
          console.log(
            "Hello",
            this.state.startpoint,
            this.state.endpoint,
            this.state.distance
          );
        };
      
        setUser = (user) => {
          this.setState({
            user: user,
          });
        };

    render(){
        return(
            <div className="map">
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
          </div>
        )
    }
}
