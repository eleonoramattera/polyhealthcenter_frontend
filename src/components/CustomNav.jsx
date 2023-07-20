import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import polyhealthlogo from "../assets/img/polyhealthlogo.jpg";
import { BiSolidUser } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";

function CustomNav() {
  const location = useLocation();
  console.log("LOCATION", location);

  return (
    <Navbar expand="lg" id="mynav" style={{ backgroundColor: "#2b5453" }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={polyhealthlogo} alt="logo" style={{ width: "200px", marginTop: "20px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 " style={{ maxHeight: "100px" }} navbarScroll>
            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
              Home
            </Link>
            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/prenotazioni">
              Prenotazioni
            </Link>
            {/* <NavDropdown title="About Us" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Chi Siamo</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Dove Siamo</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
             </Nav.Link>*/}
          </Nav>
          <Nav className=" my-2 my-lg-0 " style={{ maxHeight: "100px" }} navbarScroll>
            <BiSolidUser style={{ color: "#8effa9", fontSize: "30px", marginLeft: "10px" }} />
            <NavDropdown id="navbarScrollingDropdown">
              <div>
                {/*className={`nav-link ${location.pathname === "/" ? "active" : ""}`}*/}
                <Link className="text-dark text-decoration-none ms-4 " to="/registerpage">
                  Registrazione
                </Link>
              </div>
              <Link className="text-dark text-decoration-none ms-4" to="/login">
                Login
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default CustomNav;
