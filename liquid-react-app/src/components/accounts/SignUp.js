import React from "react";

<<<<<<< Updated upstream
export default function SignUp() {
  return <div>Signup</div>;
=======
export default function Login() {
  return <div>
    <h1 className="signup-box">Sign Up</h1>
    <div className="signup-box">
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
  </div>;
>>>>>>> Stashed changes
}
