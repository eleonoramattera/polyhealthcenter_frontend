import { ImUser } from "react-icons/im";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions";
import { Link, useLocation } from "react-router-dom";

function Login() {
  const location = useLocation();
  console.log("LOCATION", location);
  const user = {
    username: "",
    password: "",
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
  };

  return (
    <>
      <Row>
        <Col>
          <div className="MIX rounded-3 d-flex flex-column  mt-4 mb-3">
            <Form className="mt-3" noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="d-flex flex-column align-items-center mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                  <Form.Label className="text-white label fw-semibold fst-italic">Username</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend2">
                      <ImUser />
                    </InputGroup.Text>
                    <Form.Control
                      className="coloreRegister"
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend2"
                      required
                      onChange={(e) => handleChange("username", e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustomPassword">
                  <Form.Label className="text-white label fw-semibold fst-italic">Password</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend3">
                      <RiLockPasswordFill />
                    </InputGroup.Text>
                    <Form.Control
                      className="coloreRegister"
                      type="password"
                      placeholder="Password"
                      aria-describedby="inputGroupPrepend3"
                      required
                      onChange={(e) => handleChange("password", e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">Please choose a password.</Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <p className="text-white  fw-semibold d-flex flex-column align-items-center mt-3 ">
                  Non sei ancora registrato?
                  <Link
                    className={`nav-link ${location.pathname === "/registrazione" ? "active" : ""}`}
                    to="/registrazione">
                    Premi qui
                  </Link>
                </p>
              </Row>
              <Row className="my-4 d-flex flex-column align-items-center">
                <Button
                  id="coloreRegister"
                  variant="outline-light"
                  style={{ width: "auto" }}
                  onClick={() => {
                    dispatch(loginUser(input));
                  }}
                  className="fw-bolder">
                  LOGIN
                </Button>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Login;
