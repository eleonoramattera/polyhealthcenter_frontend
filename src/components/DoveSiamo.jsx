import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Mappa from "./Mappa";
import countries from "../assets/countries.json";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function DoveSiamo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row className="justify-content-center mt-5 ">
      <Col xs={12} md={8} lg={6}>
        <h3>DOVE SIAMO</h3>
        <p className="mt-5">
          PolyHealth è una realtà nazionale sempre più diffusa ed in forte crescita, con diverse sedi in tutta Italia
          per essere vicini ai nostri pazienti.
        </p>

        <Button onClick={handleShow} style={{ backgroundColor: "#8effa9" }}>
          Elenco Sedi
        </Button>
        <Mappa />

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Sedi PolyHealth</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {countries.map((marker) => (
              <p key={marker.id}>
                {" "}
                <b>{marker.comune}</b> - {marker.regione}
              </p>
            ))}
          </Offcanvas.Body>
        </Offcanvas>
      </Col>
    </Row>
  );
}

export default DoveSiamo;