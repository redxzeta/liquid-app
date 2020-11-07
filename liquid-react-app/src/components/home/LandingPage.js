import React from "react";
import { Button } from "react-bootstrap";
import LandingImage from "../../assets/images/LandingImage.jpg";
import "./landingpage.css";
export default function LandingPage() {
  return (
    <div className="landingpage">
      <h1>Tilt-O-Workout</h1>
      <img
        src={LandingImage}
        alt="tiltz"
        style={{ width: "50%", height: "auto" }}
      />
      <br />
      <Button>Get Tilted and Workout</Button>
    </div>
  );
}
