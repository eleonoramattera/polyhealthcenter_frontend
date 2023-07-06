import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function Registrazione() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState([]);

  const handleRegister = (e) => {
    const url = "http://localhost:8080/api/auth/register";
    const postData = {
      name: name,
      lastname: lastname,
      username: username,
      email: email,
      password: password,
      roles: roles,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => console.log("FETCH:" + (response.ok ? "ok" : "faild")))
      // .then((data) => {
      //   console.log(data); // Stampa la risposta dal server
      //   // Esegui altre azioni a seguito della chiamata POST
      // })
      .catch((error) => {
        console.error(error);
      });

    e.preventDefault();
    // Logica di registrazione qui...
  };

  return (
    <Container className="register-container mt-5">
      <h1 className="register-title">Register</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group controlId="formName">
          <Form.Label className="register-label">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Group controlId="formLastname">
          <Form.Label className="register-label">Lastname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Group controlId="formUsername">
          <Form.Label className="register-label">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label className="register-label">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label className="register-label">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="register-input"
          />
        </Form.Group>

        <Form.Group controlId="formRoles">
          <Form.Label className="register-label">Roles</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter roles (comma-separated)"
            value={roles}
            onChange={(e) => setRoles(e.target.value.split(","))}
            className="register-input"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="register-button">
          Register
        </Button>
      </Form>
    </Container>
  );
}
export default Registrazione;
