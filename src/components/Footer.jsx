import { Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Row className="text-center mt-5 text-white fixed-bottom" style={{ backgroundColor: "#295651" }}>
        <Col xs={12}>
          <div>Copyright PolyHealthCenter - Tutti i diritti riservati - P.IVA 1234567890</div>
        </Col>
      </Row>
    </footer>
  );
}
export default Footer;
