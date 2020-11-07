import React from "react";
import "./login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

<<<<<<< Updated upstream
export default function Login() {
  return (
    <div>
      <h1>Sign Up</h1>
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="Username" placeholder="Username" />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
=======
export default function Signup() {
  return <div>
    <h1>Sign Up</h1>
    <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="Username" placeholder="Username" />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  </div>;
>>>>>>> Stashed changes
}
