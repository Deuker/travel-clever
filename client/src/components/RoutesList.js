import React from "react";
import { Link } from "react-router-dom";
import "./RoutesList.css";

const RoutesList = (props) => {
  return (
    <div className="routesList">
      {props.routes.length > 0 && <h3>Routes:</h3>}

      {props.routes.reverse().map((routes) => {
        return (
          <div key={routes._id}>
            <p>
              <Link to={`/routes/${routes._id}`}>
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
