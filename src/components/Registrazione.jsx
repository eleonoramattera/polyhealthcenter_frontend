import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { RiLockPasswordFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { regisrazioneUser } from "../redux/actions";
import { Link, useLocation } from "react-router-dom";

function Registrazione({ setIsAuthenticated }) {
  const location = useLocation();
  console.log("LOCATION", location);
  const user = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    dataNascita: "",
    indirizzo: "",
    numeroTelefono: "",
    roles: ["ROLE_USER"],
  };

  const [input, setInput] = useState(user);
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const handleChange = (field, value) => {
    setInput((prev) => ({ ...prev, [field]: value }));
    setIsAuthenticated(true);
  };
  return (
    <>
      <Row>
        <Col xs={12}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="d-flex flex-column align-items-center my-5 text-center">
              <Form.Group
                as={Col}
                md="4"
                className="d-flex flex-column align-items-center"
                controlId="validationCustom01">
                <Form.Label className="label text-white fw-semibold fst-italic">Nome</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Nome e Cognome"
                  onChange={(e) => handleChange("firstname", e.target.value)}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                className="d-flex flex-column align-items-center"
                controlId="validationCustomUsername">
                <Form.Label className="label text-white fw-semibold fst-italic">Username</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(e) => handleChange("username", e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                className="d-flex flex-column align-items-center"
                controlId="validationCustomEmail">
                <Form.Label className="label text-white fw-semibold fst-italic">E-mail</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="email"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">inserisci la tua email.</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                className="d-flex flex-column align-items-center"
                controlId="validationCustomPassword">
                <Form.Label className="label text-white fw-semibold fst-italic">Password</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend3">
                    <RiLockPasswordFill />
                  </InputGroup.Text>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    aria-describedby="inputGroupPrepend3"
                    required
                    onChange={(e) => handleChange("password", e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">inserisci la tua password.</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="my-4 d-flex flex-column align-items-center">
              <Button
                className=" fw-bolder"
                variant="outline-light"
                style={{ width: "auto" }}
                onClick={() => {
                  dispatch(regisrazioneUser(input));
                }}>
                Completa registrazione
              </Button>
            </Row>
          </Form>
          <p className="text-white  fw-semibold d-flex flex-column align-items-center mt-3">
            Hai già un account?
            <Link className={`nav-link ${location.pathname === "/login" ? "active" : ""}`} to="/login">
              Premi qui
            </Link>
          </p>
        </Col>
      </Row>
    </>
  );
}

export default Registrazione;
