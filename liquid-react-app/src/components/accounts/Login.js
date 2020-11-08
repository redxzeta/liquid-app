import React, { useState } from "react";
import "./login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { auth } from "../../service/FireBaseDashboard";

export default function Login() {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const updateForm = (e) => {
    e.persist();
    setUser((user) => ({
      ...user,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    try {
      auth().signInWithEmailAndPassword(user.email, user.password);

      console.log("success");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1 className="login-header">Login</h1>
      <h2>{error}</h2>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="email"
            onChange={updateForm}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={updateForm}
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
