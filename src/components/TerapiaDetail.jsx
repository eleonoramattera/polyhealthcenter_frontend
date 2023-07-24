import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TerapiaDetail = ({ terapiaSelected }) => {
  return (
    <div className="mt-3 mb-4 mb-lg-0">
      {terapiaSelected ? (
        <>
          <Row>
            <Col sm={12}>
              <h2>{terapiaSelected.nome}</h2>
            </Col>
          </Row>
          <Row className="mt-3 justify-content-start">
            <Col sm={10} className="mx-5">
              <p>
                <h5 className="font-weight-bold">Descrizione:</h5>&nbsp;
                {terapiaSelected.descrizione}
              </p>
              <p>
                <h5 className="font-weight-bold">Prezzo:</h5>&nbsp;
                {terapiaSelected.prezzo}$
              </p>
            </Col>
          </Row>

          <div className="mt-5">Vuoi prenotare una visita?</div>
          <Link to="/prenotazioni">
            <Button style={{ backgroundColor: "#2b5453", border: "none" }}> Prenota ora</Button>
          </Link>
        </>
      ) : (
        <Row>
          <Col sm={12}>
            <h3>Selezione una terapia per scoprire i dettagli</h3>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default TerapiaDetail;
