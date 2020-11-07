import React from "react";
import NavigationBar from "./layout/NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/home/LandingPage";
import SignUp from "./components/accounts/SignUp";
import Profile from "./components/profile/Profile";
export default function App() {
  return (
    <Router>
      <NavigationBar />
      <h1>TRES</h1>
      <Switch>
        <Route path="profile">
          <Profile />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}
