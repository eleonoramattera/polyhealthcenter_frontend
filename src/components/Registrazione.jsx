import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { Form } from "react-bootstrap";

// const URL = "http://localhost:8080/api/auth/signin"; // <--- TODO: da verificare
const URL = "http://localhost:8080/api/auth/register";

const Registrazione = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);
  const [roles, setRoles] = useState([]);

  const handleSubmit = async (event) => {
    // prevent refresh
    event.preventDefault();
    // loading body for sign in
    const bodyRegistration = {
      firstname: name,
      lastname: lastname,
      username: username,
      email: email,
      password: password,
      roles: roles,
    };

    // sent sign in credential
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyRegistration),
      });

      if (response.ok) {
        setRegistered(true);
        alert(`Registrazione avvenuta corretamente, accedi subito all'area utenti ${name} ${lastname}!`);
      } else {
        alert(`errore durante il la registrazione, response status: ${response.status}`);
      }
    } catch (error) {
      alert(`Non sta funzionando la registrazione, chiedere assistenza: ${error}`);
    }
  };

  if (registered) {
    return <Navigate to="/login" />;
  }

  return (
    <Row className="signInBg">
      <Col className="d-flex flex-column flex-lg-row align-items-center">
        <div className="loginImgComponent d-flex align-items-center justify-content-center"></div>
        <form
          className="formComponent formComponentSignIn d-flex flex-column align-items-center align-content-center justify-content-center "
          onSubmit={handleSubmit}>
          <div>
            <label className="d-block" htmlFor="firstname">
              Nome:
            </label>
            <input
              className="my-3 p-2"
              type="firstname"
              placeholder="inserisci nome"
              id="firstname"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="d-block" htmlFor="lastname">
              Cognome:
            </label>
            <input
              className="my-3 p-2"
              type="lastname"
              placeholder="inserisci cognome"
              id="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div>
            <label className="d-block" htmlFor="username">
              Nome Utente:
            </label>
            <input
              className="my-3 p-2"
              type="text"
              placeholder="inserisci username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="d-block" htmlFor="email">
              Email:
            </label>
            <input
              className="my-3 p-2"
              type="text"
              placeholder="inserisci email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="d-block" htmlFor="password">
              Password:
            </label>
            <input
              className="my-3 p-2"
              type="password"
              placeholder="inserisci password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
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
          <Button type="submit" className="log_reg_Button">
            Registrati
          </Button>
          <p>
            Sei già registrato?
            <Link to={"/"}>
              <span className="logIn">Clicca qui</span>
            </Link>
          </p>
        </form>
      </Col>
    </Row>
  );
};

export default Registrazione;
