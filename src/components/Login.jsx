import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
/*import { SetTokenType, setToken } from "../redux/actions/UserActions";*/

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    const url = "http://localhost:8080/api/auth/login";
    var dataObj = {
      username: String,
      accessToken: String,
      tokenType: String,
    };
    const postLogin = {
      username: username,
      password: password,
    };

    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postLogin),
    })
      .then((response) => response.json())
      .then((data) => {
        dataObj = data;

        /* dispatch(setToken(dataObj));*/
      })
      .catch((error) => {
        console.error(error);
      });

    e.preventDefault();
    // Logica di autenticazione qui...
  };

  return (
    <Container className="login-container mt-5">
      <h1 className="login-title">Login</h1>
      <Form className="login-form" onSubmit={handleLogin}>
        <Form.Group controlId="formEmail">
          <Form.Label className="login-label">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label className="login-label">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="login-button">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
