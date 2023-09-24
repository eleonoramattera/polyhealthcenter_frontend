import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions";
function Logout() {
  const dispatch = useDispatch();
  return (
    <Row>
      <Col>
        <Button
          id="coloreRegister"
          variant="outline-light"
          style={{ width: "auto" }}
          onClick={() => {
            dispatch(logoutUser());
          }}
          className="fw-bolder">
          LOGOUT
        </Button>
      </Col>
    </Row>
  );
}

export default Logout;
