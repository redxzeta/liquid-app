import React from "react";
import "./login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Login() {
<<<<<<< Updated upstream
  return (
    <div>
      <h1>Login</h1>
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="Username" placeholder="Username" />
=======
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
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  );
=======
  </div>;
>>>>>>> Stashed changes
}
