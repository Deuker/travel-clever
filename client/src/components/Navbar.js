// import React from 'react'
import { Link } from 'react-router-dom';
import React from 'react';
import { Navbar as Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { logout } from '../services/auth.js';

const handleLogout = props => {
  console.log(props);
  logout().then(() => {
    props.setUser(null);
  });
}

const Navbar = props => {
  return (
//     <Nav bg="light" expand="lg">
//   <Nav.Brand href="/">Home</Nav.Brand>
//  <Nav.Toggle aria-controls="basic-navbar-nav" />
//   <Nav.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#link">Link</Nav.Link>
//     </Nav>

//   </Nav.Collapse>
// </Nav>

    <Nav className='nav justify-content-end' bg="light" expand="lg">
      {props.user && <Nav.Brand>Welcome, {props.user.username}</Nav.Brand>}
      <Nav.Brand>
        <Link to='/'>Home</Link>
      </Nav.Brand>
      <Nav.Toggle aria-controls="basic-navbar-nav" />
      {props.user ? (
        <>

          <Nav.Brand>
            <Link to='/' onClick={() => handleLogout(props)}>
              Logout</Link>
           </Nav.Brand>
            <Nav.Brand>
            <Link to='/routes' >
              My saved routes
            </Link>
          </Nav.Brand>
        </>
      ) : (
          <>
            <Nav.Brand>
              <Link to='/signup'>Signup</Link>
            </Nav.Brand>
            <Nav.Brand>
              <Link to='/login'>Login</Link>
            </Nav.Brand>
          </>
        )}
    </Nav>
  )
}


export default Navbar;