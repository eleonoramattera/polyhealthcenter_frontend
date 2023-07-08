import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";

const URL = "http://localhost:8080/api/auth/login";

/* const TOKEN_EXAMPLE =
  "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ0aGVib3NzLlVAZXhhbXBsZS5jb20iLCJpYXQiOjE2ODUwMzE1MDcsImV4cCI6MTY4NTYzNjMwN30.6ZGIqUIV1yGWiYuv_7LIgTyFqp312YVTLW_syf6DJ6DWX7e1RMNXkIR41Ls-h2oe";

const BODY_EXAMPLE = {
  username: "AccountAdmin",
  password: "pOtf8r$4Nb!",
}; */

/* const USER_EXAMPLE = {
  firstname: "Antonio",
  lastname: "Vallerga",
  username: "Antonio",
  email: "a.vallerga@gmail.com",
  password: "123stella",
  roles: ["ROLE_USER"]
} */

const Login = () => {
  let result;

  let stringifiedUser = localStorage.getItem("userT");
  let user = JSON.parse(stringifiedUser);
  let isLogged = !!stringifiedUser;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkState, setCheckState] = useState(false);

  let dispatch = useDispatch();

  const loadUser = useCallback(
    (result) => {
      // send token to Redux store
      dispatch({
        type: "CHECK_TOKEN_REDUCER",
        payload: `Bearer ${result.accessToken}`,
      });

      // send username to Redux store
      dispatch({
        type: "SAVE_USERNAME",
        payload: result.username,
      });
    },
    [dispatch]
  );

  useEffect(() => {
    if (isLogged) {
      loadUser(user);
    }
  }, [user, isLogged, loadUser]);

  /* useEffect(() => {
    if (user) {
      setUsername(user.username);
      setPassword(localStorage.getItem("pass"));
    }
  }, [user]); */

  const handleSubmit = async (event) => {
    // prevent refresh
    event.preventDefault();
    // loading body for login in
    const bodyLogin = {
      username: username,
      password: password,
    };

    // sent log in credential and receive fresh token
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyLogin),
      });

      if (response.ok) {
        result = await response.json();
        // print fetch response body
        let stringifiedResult = JSON.stringify(result);

        loadUser(result);

        if (checkState) {
          localStorage.setItem("userT", stringifiedResult);
          localStorage.setItem("pass", password);
        } else {
          localStorage.clear();
        }
      } else {
        alert(`errore durante il login, response status: ${response.status}`);
      }
    } catch (error) {
      alert(`errore durante il login: ${error}`);
    }
  };

  // Token stored in Redux Store
  let userToken = useSelector((state) => state.security.userToken);

  if (userToken) {
    return <Navigate to="/Home" />;
  }

  return (
    <Row className="loginBg">
      <Col className="d-flex flex-column flex-lg-row align-items-center">
        <div className="loginImgComponent d-flex align-items-center justify-content-center">
          <img className="loginLogo" src={require("../../assets/image/Loan_login.png")} alt="loginImg" />
        </div>
        <form
          className="formComponent d-flex flex-column align-items-center align-content-center justify-content-center"
          onSubmit={handleSubmit}>
          <div>
            <label className="d-block" htmlFor="username">
              Username:
            </label>
            <input
              className="my-1 m p-1"
              type="text"
              placeholder="inserisci username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="d-block" htmlFor="password">
              Password:
            </label>
            <input
              className="my-1 p-1"
              type="password"
              placeholder="inserisci password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-flex align-items-center pt-3">
            <input
              onChange={(e) => setCheckState(e.target.checked)}
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={checkState}
            />
            <label className="ms-2" htmlFor="rememberMe">
              Memorizza profilo utente
            </label>
          </div>
          <Button type="submit" className="log_reg_Button">
            Accedi
          </Button>
          <p>
            Non riesci a connetterti?
            <Link to={"/Register"}>
              <span className="logIn">Clicca qui</span>
            </Link>
          </p>
        </form>
      </Col>
    </Row>
  );
};

export default Login;
