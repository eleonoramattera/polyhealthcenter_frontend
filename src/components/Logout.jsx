import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions";
function Logout() {
  const dispatch = useDispatch();
  return (
    <Row>
      <Col xs={12} className="d-flex justify-content-center">
        <Button
          className=" fw-bolder bg-success w-auto border border-0 my-4 d-flex flex-column align-items-center"
          onClick={() => {
            dispatch(logoutUser());
          }}>
          Logout
        </Button>
      </Col>
    </Row>
  );
}

export default Logout;
