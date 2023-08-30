import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import polyhealthlogo from "../../assets/img/polyhealthlogo.jpg";
import { BiSolidUser } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState, useEffect } from "react";
import "./CustomNav.css";

function CustomNav() {
  const location = useLocation();
  console.log("LOCATION", location);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar.Brand>
        <img src={polyhealthlogo} alt="logo" style={{ width: "200px" }} onClick={handleShow} />
      </Navbar.Brand>
      <Offcanvas show={show} onHide={handleClose} style={{ backgroundColor: "#8dffa8" }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={polyhealthlogo} alt="logo" style={{ width: "200px" }} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ color: "#1dc48c" }}>
          <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
            Home
          </Link>
          <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/prenotazioni">
            Prenotazioni
          </Link>
          <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/registerpage">
            Registrazione
          </Link>

          <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/login">
            Logout
          </Link>
        </Offcanvas.Body>
      </Offcanvas>

      {/* <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0 " style={{ maxHeight: "100px" }} navbarScroll>
          <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
            Home
          </Link>
          <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/prenotazioni">
            Prenotazioni
          </Link>
        </Nav>
        <Nav className=" my-2 my-lg-0 " style={{ maxHeight: "100px" }} navbarScroll>
          <div>
            <BiSolidUser style={{ color: "#8effa9", fontSize: "30px", marginLeft: "10px" }} />
            <div style={{ fontSize: "12px", color: "white" }}>
              Benvenuto, <bold> user </bold>
            </div>
          </div>
          <NavDropdown id="navbarScrollingDropdown">
            <div>
              {/* className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
              <Link className="text-dark text-decoration-none ms-4 " to="/registerpage">
                Registrazione
              </Link>
            </div>
            <Link className="text-dark text-decoration-none ms-4" to="/login">
              Logout
            </Link>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse> */}
    </>
  );
}
export default CustomNav;