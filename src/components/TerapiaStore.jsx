import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TerapiaList from "./TerapiaList";
import TerapiaDetail from "./TerapiaDetail";

const TerapiaStore = () => {
  const [terapie, setTerapie] = useState([]);
  const [terapiaSelected, setTerapiaSelected] = useState(null);

  const getTerapie = async () => {
    try {
      let resp = await fetch("http://localhost:8080/api/terapie");
      if (resp.ok) {
        let fetchedTerapie = await resp.json();
        setTerapie(fetchedTerapie);
        console.log("terapie", fetchedTerapie);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTerapie();
  }, []);

  const changeTerapia = (terapia) => setTerapiaSelected(terapia);

  return (
    <Container>
      <Row className="justify-content-center mt-5 ">
        <Col lg={3}>
          <TerapiaList terapiaSelected={terapiaSelected} changeTerapia={changeTerapia} terapie={terapie} />
        </Col>
        <Col lg={9}>
          <TerapiaDetail terapiaSelected={terapiaSelected} />
        </Col>
      </Row>
    </Container>
  );
};

export default TerapiaStore;
