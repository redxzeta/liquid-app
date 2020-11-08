import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import "./profile.css";

const ProfileCard = ({ data }) => {
  return (
    <Fragment>
      {data.map((data) => (
        <Card className="profile-card" key={data._id}>
          <Card.Header>Match ID ({data._id})</Card.Header>
          <Card.Body>
            <Card.Title>Game: {data.game} </Card.Title>
            <Card.Title className="card-subtitle">🎮 Match Stats</Card.Title>
            <Card.Text>Kills - {data.kills}</Card.Text>
            <Card.Text>Deaths - {data.deaths}</Card.Text>
            <Card.Text>Assists - {data.assists}</Card.Text>
            <Card.Title className="card-subtitle">💪 Workout Stats</Card.Title>
            <Card.Text>Push-Ups - {data.pushups}</Card.Text>
            <Card.Text>Squats - {data.squats}</Card.Text>
            <Card.Text>Jumping Jacks - {data.jumpingjacks}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Fragment>
  );
};

export default ProfileCard;
