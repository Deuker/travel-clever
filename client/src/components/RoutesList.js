import React from "react";
import { Link } from "react-router-dom";

const RoutesList = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginRight: "20%",
        marginLeft: "5%",
      }}
    >
      <h1>hi</h1>
      {props.routes.length > 0 && <h2>Routes:</h2>}

      {props.routes.reverse().map((routes) => {
        return (
          <div key={routes._id}>
            <h3>
              <Link to={`/routes/${routes._id}`}>
                {routes.startpoint} - {routes.endpoint}
              </Link>
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default RoutesList;
