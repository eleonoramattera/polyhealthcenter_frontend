import { ImUser } from "react-icons/im";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions";
import { Link, useLocation } from "react-router-dom";
import { setAuthenticated } from "../redux/actions/index";

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
    dispatch(setAuthenticated(true));
  };

  const handleChange = (field, value) => {
    setInput((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Row>
        <Col xs={12}>
          <h4 className="text-center text-success">LOGIN</h4>

          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="d-flex flex-column align-items-center my-5 text-center">
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label className="text-white label fw-semibold fst-italic">Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend2">
                  <ImUser />
                </InputGroup.Text>
                <Form.Control
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

            <Button
              className=" fw-bolder bg-success w-auto border border-0 my-4 d-flex flex-column align-items-center"
              onClick={() => {
                dispatch(loginUser(input));
              }}>
              Login
            </Button>
          </Form>
        </Col>
        <Col xs={12}>
          <p className="fw-semibold d-flex flex-column align-items-center ">
            Non sei ancora registrato?
            <Link to="/registrazione" className="text-decoration-none fw-bold text-success ">
              Premi qui
            </Link>
          </p>
        </Col>
      </Row>
    </>
  );
}

export default Login;
