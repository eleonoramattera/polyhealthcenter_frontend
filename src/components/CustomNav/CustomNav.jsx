import Navbar from "react-bootstrap/Navbar";

import polyhealthlogo from "../../assets/img/polyhealthlogo.png";

import { Link, useLocation } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState } from "react";
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
        <img src={polyhealthlogo} alt="logo" onClick={handleShow} />
      </Navbar.Brand>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={polyhealthlogo} alt="logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
            Home
          </Link>
          <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/prenotazioni">
            Prenotazioni
          </Link>
          <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/registerpage">
            Registrazione
          </Link>

          <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/logout">
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
