<<<<<<< Updated upstream
import React from "react";

export default function Login() {
  return <div>Login</div>;
=======
import React, { useState } from "react";
import './login.css'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const [details, setDetails] = useState({username: "", password: ""});
  const submitHandler = e => {
    e.preventDefault();

    Login(details);
  }
  return <div>
    <h1 className="login-box">Login</h1>
    <div className="login-box">
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="Username" placeholder="Username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username}/>
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  </div>;
>>>>>>> Stashed changes
}
