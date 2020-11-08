import React, { Fragment, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
export default function Workout() {
  //pushups
  //squats
  const [workout, setWorkout] = useState("");
  const [lift, setLift] = useState(5);
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
  const onSubmit = (e) => {
    e.preventDefault();
    const pop = uuidv4();
    const increment = lift + 5;
    setLift(increment);
    console.log(pop);
    console.log(workout);
  };

  return (
    <div>
      <h1>TILT O WORKOUT</h1>
      <h1>Enter Starting Workout numbers and increments</h1>

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
              onChange={updateWorkout}
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="lost game"
              name="game_won"
              value="false"
              onChange={updateWorkout}
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Row>
        <Row>
          <Col>
            {workout.game_won === "false" ? (
              <Fragment>
                <LetsWorkout name="pushups" number={lift} />
                <LetsWorkout name="squats" number={lift} />
                <LetsWorkout name="jumping jacks" number={lift} />
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
