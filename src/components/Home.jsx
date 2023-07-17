import Banner from "./Banner.jsx";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import SectionCounter from "./SectionCounter.jsx";
import Mappa from "./Mappa.jsx";

function Home() {
  const [terapie, setTerapie] = useState([]); // 1
  const [isLoading, setIsLoading] = useState(true); // 2
  const [isError, setIsError] = useState(false); // 3

  const getAllTerapie = async () => {
    try {
      let response = await fetch("http://localhost:8080/api/terapie");
      if (response.ok) {
        let data = await response.json();
        console.log("data", data);
        const firstElements = data.slice(0, 6);
        console.log("data slice", firstElements);
        setTerapie(firstElements);
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
    <Container fluid className="p-0 m-0">
      <Banner />
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6}>
          <SectionCounter />
          <h3 className="mt-5">CHI SIAMO</h3>
          <p>
            PolyHealth promuove la salute, la prevenzione e la diagnosi precoce attraverso attività ambulatoriali e
            servizi avanzati e innovativi. PolyHealth è da sempre parte attiva in campagne sull’importanza degli stili
            di vita.
            <br />
            <Link to="/chisiamo" className="text-dark" style={{ fontWeight: "bold" }}>
              Scopri di più
            </Link>
          </p>

          <h3 className="mt-5">LE NOSTRE TERAPIE</h3>
          <p>
            Noi di PolyHealth offriamo ai nostri pazioenti terapie di qualità eseguite con macchinari all'avanguardia La
            Qualità della cura e dell’assistenza è il primo obiettivo di Humanitas, con l’intento di favorire un
            miglioramento continuo, a beneficio dei pazienti. Qualità significa anche capacità di analisi, per misurarci
            e migliorare in modo trasparente e innovativo, equilibrando efficacia clinica, esperienza del paziente e
            sostenibilità.
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
            {/* predisponiamo questa lista per leggere costantemente
                  il valore di this.state.reservations e generare dinamicamente
                  i list item per ogni prenotazione */}
            <div style={{ display: "flex", flexWrap: "wrap", width: "100%", justifyContent: "space-between" }}>
              {terapie.map((ter) => (
                <div
                  key={ter._id}
                  className="my-4"
                  style={{
                    width: "40%",
                    margin: "10px",
                    padding: "10px",
                    borderRadius: "20px",
                    backgroundColor: "#8dffa8",
                  }}>
                  {ter.nome}
                </div>
              ))}
            </div>
            <Link to="/terapie" className="text-dark" style={{ fontWeight: "bold" }}>
              Scopri tutte le terapie
            </Link>
          </p>

          <h3 className="mt-5">DOVE SIAMO</h3>
          <Mappa />
          <Link to="/dovesiamo" className="text-dark" style={{ fontWeight: "bold" }}>
            Scopri di più
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
