import axios from "axios";
import React, { useEffect, useState } from "react";

import "./profile.css";
import ProfileCard from "./ProfileCard";

export default function Profile({ uid }) {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_FLASK}/session/${uid}`)
      .then((response) => {
        setData(response.data.game_workout);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [uid]);
  return (
    <div className="profile-page">
      <h1 className="profile-title">Your Profile</h1>
      <h2 className="profile-subtitle">Recent Stats</h2>
      {data && <ProfileCard data={data} />}
    </div>
  );
}
