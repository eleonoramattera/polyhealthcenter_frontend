import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import polyhealthlogo from "../assets/img/polyhealthlogo.jpg";
import { BiSolidUser } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

function CustomNav() {
  return (
    <Navbar expand="lg" id="mynav" style={{ backgroundColor: "#2b5453" }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={polyhealthlogo} alt="logo meteo" style={{ width: "200px", marginTop: "20px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 " style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Prenotazioni</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            {/*<Nav.Link href="#" disabled>
              Link
             </Nav.Link>*/}
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button style={{ backgroundColor: "#8effa9", border: "1px solid #8effa9", color: "black" }}>
              <FaSearch />
            </Button>
          </Form>

          <BiSolidUser style={{ color: "#8effa9", fontSize: "30px", marginLeft: "10px" }} />
          <NavDropdown id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Registrazione</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Login</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default CustomNav;
