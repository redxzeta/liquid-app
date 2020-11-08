import React, { Fragment } from "react";
import { Button, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { auth } from "../service/FireBaseDashboard";
export default function NavigationBar({ userAuth }) {
  const onSignOut = () => {
    auth()
      .signOut()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Navbar bg="primary" expand="lg">
      <Navbar.Brand href="#home">Tiltz</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          {userAuth.authenticated ? (
            <Fragment>
              <Nav.Link as={Link} to="/profile">
                {userAuth.data.displayName}
              </Nav.Link>
              <Nav.Link as={Link} to="/workout">
                workout
              </Nav.Link>
            </Fragment>
          ) : (
            <Fragment>
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Fragment>
          )}
        </Nav>
        {userAuth.authenticated ? (
          <Button onClick={onSignOut} variant="secondary">
            Logout
          </Button>
        ) : (
          ""
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
