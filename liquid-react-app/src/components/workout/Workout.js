import React, { Fragment, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
export default function Workout({ uid }) {
  //pushups
  //squats
  let history = useHistory();
  const [workout, setWorkout] = useState({ kills: 0, assists: 0, deaths: 0 });
  const [lift, setLift] = useState(5);
  const [reps, setReps] = useState(5);
  const [tilt, setTilt] = useState(0);
  const updateWorkout = (e) => {
    e.persist();
    setWorkout((workout) => ({
      ...workout,
      [e.target.name]: e.target.value,
    }));
  };
  //pushups
  //squats
  //jumping jacks

  useEffect(() => {
    const killscore = parseInt(workout.kills) + parseInt(workout.assists);
    if (killscore < workout.deaths) {
      const number = parseInt(workout.deaths) - killscore;

      setReps(lift + number);
    } else {
      setReps(lift + 1);
    }
  }, [workout, lift]);

  const onSubmit = (e) => {
    e.preventDefault();
    let submittedReps = 0;
    if (workout.game_won === "true") {
      setTilt(0);
      setLift(5);
    } else {
      setTilt(tilt + 1);
      const increment = lift + 5;
      setLift(increment);
      submittedReps = reps;
    }

    const workoutId = uuidv4();

    const submitForm = {
      ...workout,
      _id: workoutId,
      pushups: submittedReps,
      squats: submittedReps,
      jumpingjacks: submittedReps,
    };
    axios
      .put(`${process.env.REACT_APP_FLASK}/session/${uid}`, submitForm)
      .then((response) => {
        setWorkout({ kills: 0, assists: 0, deaths: 0, game_won: "true" });
      })
      .catch((error) => {
        console.log(error);
      });

    if (tilt + 1 === 3) {
      history.push("/");
    }
  };

  return (
    <div>
      <h1>TILT O WORKOUT</h1>
      <h2>TILT COUNTER: {tilt} </h2>

      <Form onSubmit={onSubmit}>
        <InputForm
          onChange={updateWorkout}
          name="game"
          value={workout.game}
          type="text"
        />
        <Form.Row>
          <KDAForm
            onChange={updateWorkout}
            name="kills"
            value={workout.kills}
            type="number"
          />
          <KDAForm
            onChange={updateWorkout}
            name="deaths"
            value={workout.deaths}
            type="number"
          />
          <KDAForm
            onChange={updateWorkout}
            name="assists"
            value={workout.assists}
            type="number"
          />
        </Form.Row>
        <Form.Row>
          <Form.Label as="legend" column sm={2}>
            Radios
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="won game"
              name="game_won"
              value="true"
              checked={workout.game_won === "true"}
              onChange={updateWorkout}
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="lost game"
              name="game_won"
              value="false"
              checked={workout.game_won === "false"}
              onChange={updateWorkout}
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Row>
        <Row>
          <Col>
            {workout.game_won === "false" ? (
              <Fragment>
                <LetsWorkout name="pushups" number={reps} />
                <LetsWorkout name="squats" number={reps} />
                <LetsWorkout name="jumping jacks" number={reps} />
              </Fragment>
            ) : (
              ""
            )}
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {workout.game_won === "false" ? (
        <img
          src="https://media.giphy.com/media/S6B2ojCGJEM09J4R95/giphy.gif"
          alt="liquid_gif"
        />
      ) : (
        <img
          src="https://media.giphy.com/media/gLWIEqSm5zCjZmiaQx/giphy.gif"
          alt="gif"
        />
      )}
    </div>
  );
}

const LetsWorkout = ({ name, number }) => (
  <h1>
    {number} {name}
  </h1>
);
const KDAForm = (props) => (
  <Col>
    <InputForm {...props} />
  </Col>
);

const InputForm = ({ onChange, name, value, type }) => (
  <Form.Group controlId="formBasicEmail">
    <Form.Label>{name}</Form.Label>
    <Form.Control
      type={type}
      placeholder={`Enter ${name}`}
      name={name}
      value={value || ""}
      onChange={onChange}
    />
  </Form.Group>
);
