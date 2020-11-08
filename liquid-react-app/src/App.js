import React, { useEffect, useState } from "react";
import NavigationBar from "./layout/NavigationBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LandingPage from "./components/home/LandingPage";
import SignUp from "./components/accounts/SignUp";
import Profile from "./components/profile/Profile";
import { Container } from "react-bootstrap";
import Login from "./components/accounts/Login";
import { auth } from "./service/FireBaseDashboard";
import Workout from "./components/workout/Workout";
export default function App() {
  const [userAuth, setUserAuth] = useState("");
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setUserAuth({
          authenticated: true,
          data: user,
        });
      } else {
        setUserAuth({ authenticated: false });
      }
    });
  }, []);

  return (
    <Router>
      <NavigationBar userAuth={userAuth} />
      <Container>
        <Switch>
          <Route path="/profile">
            {userAuth.authenticated ? (
              <Profile uid={userAuth.data.uid} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/signup">
            {userAuth.authenticated ? <Redirect to="/" /> : <SignUp />}
          </Route>
          <Route path="/login">
            {userAuth.authenticated ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/workout">
            {userAuth.authenticated ? (
              <Workout uid={userAuth.data.uid} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/">
            <LandingPage authenticated={userAuth.authenticated} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
