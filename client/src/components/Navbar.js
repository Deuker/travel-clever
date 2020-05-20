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
    <Nav bg="bg-custom">
      <Nav.Toggle aria-controls="basic-navbar-nav" />
      <Nav.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {props.user && <Nav.Brand>Welcome, {props.user.username}</Nav.Brand>}
          <Nav.Brand>
            <Link to="/" class="link">
              Home
            </Link>
          </Nav.Brand>
          <Nav.Toggle aria-controls="basic-navbar-nav" />
          {props.user ? (
            <>
              <Nav.Brand>
                <Link to="/" class="link" onClick={() => handleLogout(props)}>
                  Logout
                </Link>
              </Nav.Brand>
              <Nav.Brand>
                <Link to="/routes" class="link">
                  My saved routes
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
        </Nav>
      </Nav.Collapse>
    </Nav>
  );
};

export default Navbar;
