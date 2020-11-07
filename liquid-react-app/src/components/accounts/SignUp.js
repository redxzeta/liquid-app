import React, { useState } from "react";
import "./login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { auth, userCreate } from "../../service/FireBaseDashboard";

export default function SignUp() {
  const [user, setUser] = useState({});
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
    console.log("going in");
    setError("");
    auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredentials) => {
        if (userCredentials.user) {
          userCredentials.user.updateProfile({
            displayName: user.username,
          });
        }

        const userForm = {
          ...user,
          uid: userCredentials.user.uid,
        };
        userCreate(userForm);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <h2>{error}</h2>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            name="username"
            placeholder="Username"
            onChange={updateForm}
            value={user.username || ""}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={user.email || ""}
            type="Email"
            name="email"
            placeholder="Email"
            onChange={updateForm}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={updateForm}
          />
        </Form.Group>
        {/* <Form.Group controlId="formPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
}
