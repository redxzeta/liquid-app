import React from "react";
import { Button } from "react-bootstrap";
import LandingImage from "../../assets/images/LandingImage.jpg";
import "./landingpage.css";
export default function LandingPage() {
  return (
    <div className="landingpage">
      <div className="flex-1"><h1 className="landing-title">Tilt-O-Workout</h1></div>
      <div className="flex-3"><img src={LandingImage} alt="tiltz" /></div>
      <div className="flex-2"><h2 className="landing-text">Welcome to Tilt-O-Workout! We are perfect for gamers like you who want to incorporate your health and fitness with gaming.</h2></div>
      <div className="flex-1"><h1 className="landing-subtitle">Our Mission</h1></div>
      <div className="flex-2-1">
        <h2 className="landing-text">
          <li className="landing-text">Break the 'scrawny' gamer stereotype</li>
          <li className="landing-text">Build a friendly competitive fitness environment</li>
          <li className="landing-text">Give incentives for being healthy and working out</li>
          <li className="landing-text">Create fun in fitness</li>
        </h2></div>
      <div className="flex-1"><h1 className="landing-subtitle">Ready to get started?</h1></div>
      <div className="flex-4"><Button>Click Me!</Button></div>
    </div>
  );
}