import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
function Terapie() {
  const [terapie, setTerapie] = useState([]); // 1
  const [isLoading, setIsLoading] = useState(true); // 2
  const [isError, setIsError] = useState(false); // 3

  const getAllTerapie = async () => {
    try {
      let response = await fetch("http://localhost:8080/api/terapie");
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setTerapie(data);
        setIsLoading(false);
      } else {
        console.log("errore nella chiamata");
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    console.log("SONO COMPONENTDIDMOUNT()!");
    getAllTerapie();
  }, []);
  // === componentDidMount
  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col md={8}>
          <h2>TERAPIE</h2>

          {/* LOGICA DI ERRORE */}
          {isError && <Alert variant="danger">Qualcosa è andato storto :(</Alert>}

          {/* LOGICA DI CARICAMENTO */}
          {/* RENDERING CONDIZIONALE 1: ternary operator */}
          {/* {this.state.isLoading ? <div>ok</div> : <div>non ok</div>} */}

          {/* RENDERING CONDIZIONALE 2: SHORT CIRCUIT*/}
          {/* && --> SHORT CIRCUIT OPERATOR */}
          {isLoading && (
            <div className="text-center">
              <Spinner animation="border" role="status" variant="success">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
        </Col>
      </Row>

      <Row className="d-flex">
        {terapie.map((ter) => (
          <>
            <Col xs={12} md={4} className=" mt-3 d-flex justify-content-between" key={ter._id}>
              <Card style={{ width: "18rem", textAlign: "justify" }}>
                {/*   predisponiamo questa lista per leggere costantemente
                  il valore di this.state.reservations e generare dinamicamente
                  i list item per ogni prenotazione   */}
                <Card.Header style={{ fontWeight: "bold" }}>
                  <a href="#destinazione"> {ter.nome} </a>
                </Card.Header>
              </Card>
            </Col>
          </>
        ))}
      </Row>
      <div style={{ height: "2000px" }}> ww</div>
      <Row>
        <Col xs={12} md={4}>
          {terapie.map((ter) => (
            <div key={ter._id}>
              <a name="destinazione">
                <p>{ter.nome}</p>{" "}
              </a>
              <p>{ter.descrizione}</p>
              <p>{ter.prezzo}</p>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
export default Terapie;
