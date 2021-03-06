import React from "react";
import { Link } from "react-router-dom";
import "./RoutesList.css";
// import "./black_bike_transparent.png"
const RoutesList = (props) => {
  return (
    <div className="routesList">
      {props.routes.length > 0 && <h3>Routes:</h3>}

      {props.routes.map((routes) => {
        return (
          <div key={routes._id}>
            <p>

              <Link className="routeLink" to={`/routes/${routes._id}`}>

                {routes.startpoint} - {routes.endpoint}
              </Link>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default RoutesList;
