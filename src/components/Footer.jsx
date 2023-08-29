import { Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-5">
      <Row
        className="text-center mt-5 text-white fixed-bottom d-flex justify-content-around mt-5"
        style={{ backgroundColor: "#295651" }}>
        <Col xs={12} className="d-flex justify-content-around my-1">
          <div>
            Copyright PolyHealthCenter <AiOutlineCopyrightCircle />
          </div>
          <div>
            <Link to="https://github.com/eleonoramattera">
              <AiFillGithub style={{ fontSize: "30px", marginRight: "6px", color: "white" }} />
            </Link>
            <Link to="https://www.linkedin.com/in/eleonora-mattera-655078218/">
              <FaLinkedin style={{ fontSize: "30px", color: "white" }} />
            </Link>
          </div>
        </Col>
      </Row>
    </footer>
  );
}
export default Footer;
