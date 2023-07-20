import { Col, Row } from "react-bootstrap";

const TerapiaDettaglio = ({ terapiaSelected }) => {
  return (
    <div className="mt-3 mb-4 mb-lg-0">
      {terapiaSelected ? (
        <>
          <Row>
            <Col sm={12}>
              <h1>{terapiaSelected.nome}</h1>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={8}>
              <p>
                <span className="font-weight-bold">Description:</span>&nbsp;
                {terapiaSelected.descrizione}
              </p>
              <p>
                <span className="font-weight-bold">Price:</span>&nbsp;
                {terapiaSelected.prezzo}$
              </p>
            </Col>
          </Row>
        </>
      ) : (
        <Row>
          <Col sm={12}>
            <h3>Seleziona una terapia per visualizzare i dettagli</h3>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default TerapiaDettaglio;
