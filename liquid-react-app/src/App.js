import React, { useState } from "react";
import NavigationBar from "./layout/NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/home/LandingPage";
import SignUp from "./components/accounts/SignUp";
import Profile from "./components/profile/Profile";
import { Container } from "react-bootstrap";
import Login from "./components/accounts/Login";
export default function App() {
  return (
    <Router>
      <NavigationBar />
      <Container>
        <Switch>
          <Route path="profile">
            <Profile />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
