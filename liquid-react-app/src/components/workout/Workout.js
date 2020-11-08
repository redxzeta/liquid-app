import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
export default function Workout() {
  //pushups
  //squats
  const [workout, setWorkout] = useState("");
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
              label="first radio"
              name="game_won"
              value={true}
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="second radio"
              name="game_won"
              value={false}
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <img
        src="https://media.giphy.com/media/gLWIEqSm5zCjZmiaQx/giphy.gif"
        alt="gif"
      />
    </div>
  );
}

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
