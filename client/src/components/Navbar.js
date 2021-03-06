// import React from 'react'
import { Link } from "react-router-dom";
import React from "react";
import { Navbar as Nav } from "react-bootstrap";
import "./Navbar.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { logout } from "../services/auth.js";

const handleLogout = (props) => {
  console.log(props);
  logout().then(() => {
    props.setUser(null);
  });
};

const Navbar = (props) => {
  return (
    <Nav style={{ justifyContent: "space-between" }}>
      <Nav.Brand>
        <div className="bike">
          <img
            src={require("./black_bike_transparent.png")}
            alt=""
            width="35%"
          />
        </div>
      </Nav.Brand>
      <div style={{ display: "flex", justifyContent: "flexEnd" }}>
        {props.user && (
          <Nav.Brand>
            <b>Welcome, {props.user.username}</b>
          </Nav.Brand>
        )}
        <Nav.Brand>
          <Link to="/" class="link">
            Home
          </Link>
        </Nav.Brand>

        {props.user ? (
          <>
            <Nav.Brand>
              <Link to="/routes" class="link">
                My saved routes
              </Link>
            </Nav.Brand>
            <Nav.Brand>
              <Link to="/" class="link" onClick={() => handleLogout(props)}>
                Logout
              </Link>
            </Nav.Brand>
          </>
        ) : (
          <>
            <Nav.Brand>
              <Link to="/signup" class="link">
                Signup
              </Link>
            </Nav.Brand>
            <Nav.Brand>
              <Link to="/login" class="link">
                Login
              </Link>
            </Nav.Brand>
          </>
        )}
      </div>
    </Nav>
  );
};

export default Navbar;
