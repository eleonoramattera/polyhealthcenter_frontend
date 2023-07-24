import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/userAction";

function Login() {
  /* const admin = {
    username: "",
    password: "",
  }; */
  const user = {
    username: "",
    password: "",
  };

  const [input, setInput] = useState(user);
  const dispatch = useDispatch();

  const handleChange = (field, value) => {
    setInput((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <Card className="text-center w-25 my-5 cardCarrello">
          <Card.Body>
            <Card.Title className="mb-4">Login</Card.Title>
            <Form>
              <Form.Group md="4" controlId="validationCustom01" className="mb-4">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Username"
                  onChange={(e) => handleChange("username", e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="validationCustom02" className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  onChange={(e) => handleChange("password", e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form>
            <Button
              className="mt-2 mb-4  buttonO"
              onClick={() => {
                dispatch(loginUser(input));
              }}>
              Submit form
            </Button>
            <div>Non sei registrato?</div>
            <Button href="/registrazione" className="mt-2 mb-4  buttonO">
              Crea il tuo account!
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Login;

/*import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SetTokenType, setToken } from "../redux/actions/index";

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

        dispatch(setToken(dataObj));
      })
      .catch((error) => {
        console.error(error);
      });

    e.preventDefault();

    const token = dataObj.accessToken;
    sessionStorage.setItem("token", token);
    const gettoken = sessionStorage.getItem("token");
    console.log(typeof gettoken, "TOKEN");
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
  
  */
