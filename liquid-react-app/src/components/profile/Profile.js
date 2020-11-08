import React from "react";

import "./profile.css";
import ProfileCard from "./ProfileCard";

const data = [
  {
    _id: "ee05f297-2fec-4d82-8e63-3c949693df09",
    assists: "2",
    deaths: "5",
    game: "league of legends",
    game_won: "false",
    jumpingjacks: 8,
    kills: "0",
    pushups: 8,
    squats: 8,
  },
  {
    _id: "4938de8a-60fc-4b2b-95b1-157e13185d7a",
    assists: "1",
    deaths: "0",
    game: "league of legends",
    game_won: "false",
    jumpingjacks: 6,
    kills: "22",
    pushups: 6,
    squats: 6,
  },
];

export default function Profile() {
  return (
    <div className="profile-page">
      <h1 className="profile-title">Profile</h1>
      <h2 className="profile-subtitle">Recent Stats</h2>
      {data && <ProfileCard data={data} />}
    </div>
  );
}
