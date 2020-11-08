import React, { useEffect, useState } from "react";
import NavigationBar from "./layout/NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

  console.log(userAuth.data);
  return (
    <Router>
      <NavigationBar userAuth={userAuth} />
      <Container>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/workout">
            <Workout />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
