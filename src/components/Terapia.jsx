import { Card } from "react-bootstrap";

const Terapia = ({ terapia, changeTerapia, terapiaSelected }) => (
  <Card
    className={terapiaSelected?.id === terapia.id ? "custom-border mt-3" : "custom-border-default mt-3"}
    onClick={() => changeTerapia(terapia)}
    style={{ cursor: "pointer" }}>
    <Card.Body className="d-flex justify-content-center">
      <div className="terapie">
        <Card.Text className="fw-bold">{terapia.nome}</Card.Text>
        <p>{terapia.prezzo}€</p>
      </div>
    </Card.Body>
  </Card>
);

export default Terapia;
