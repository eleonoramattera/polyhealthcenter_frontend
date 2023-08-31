import { Link, useNavigate, useLocation } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import SectionCounter from "../SectionCounter.jsx";
import Mappa from "../Mappa.jsx";
import medico from "../../assets/img/medicoHomePage.png";
import medici from "../../assets/img/medici.jpg";
import ospedale from "../../assets/img/hospital.jpg";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useState, useEffect } from "react";
import "./Home.css";

function Home({ formType }) {
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
      <Row className="d-flex justify-content-evenly flex-wrap" style={{ width: "100vw" }}>
        <Col xs={12} id="firstCOL">
          <div>
            <p>
              Medicina all'avanguardia <br />
              con oltre 50 specialità cliniche <br />e più di 700 medici
            </p>
          </div>
          <div>
            <p className="mt-5">
              PolyHealth promuove la salute, la prevenzione e la diagnosi precoce attraverso attività ambulatoriali e
              servizi avanzati e innovativi. PolyHealth è da sempre parte attiva in campagne sull’importanza degli stili
              di vita.
            </p>
          </div>
          <div></div>
          <div></div>
        </Col>
        <Col xs={6} id="secondCOL">
          <img src={medico} alt="medico" />
          <div></div>
        </Col>
      </Row>
      <Row className="my-5 " style={{ margin: "auto", width: "100%" }}>
        <Col xs={6} className="ms-2" style={{ textAlign: "justify" }}>
          <h3>CHI SIAMO</h3>
          <p>
            PolyHealth si impegna con fervore a innalzare il livello di benessere dell'intera comunità. Attraverso
            l'offerta di servizi ambulatoriali all'avanguardia, miriamo a costruire un futuro più sano e vibrante per
            tutti. Il nostro impegno è radicato nella promozione attiva della salute, nella protezione dall'insorgenza
            di condizioni mediche e nella tempestiva individuazione di potenziali problematiche. Riconosciamo
            l'importanza di agire in anticipo, e questo si riflette nella nostra dedizione a sostenere una cultura di
            prevenzione. La nostra gamma di servizi non si limita a trattare le patologie esistenti, ma si estende anche
            a educare e fornire risorse per prevenire tali condizioni in primo luogo. Crediamo che la prevenzione sia il
            primo passo verso un futuro più sano e ci impegniamo a guidare questa iniziativa con soluzioni innovative.
          </p>
          <Link
            to="/chisiamo"
            className="p-2 text-decoration-none"
            style={{ backgroundColor: "#8dffa8", color: "black" }}>
            Leggi di più
          </Link>
        </Col>
        <Col>
          <img src={medici} alt="medici" />
        </Col>
      </Row>

      <Row className="my-5 " style={{ margin: "auto", width: "100%" }}>
        <Col xs={4}>
          <img src={ospedale} alt="ospedale" style={{ width: "100%", marginTop: "4em" }} />
          <p className="mt-5 mx-3" style={{ textAlign: "justify" }}>
            Siamo dedicati a portare la cura e la professionalità vicino a te, attraverso diverse sedi strategicamente
            posizionate. Ogni sede è attrezzata con personale altamente qualificato e attrezzature all'avanguardia, per
            garantire il massimo standard di assistenza. Siamo pronti ad accoglierti e a prenderti cura di te, ovunque
            tu sia.
          </p>
          <Link
            to="/dovesiamo"
            className="p-2 mx-3 text-decoration-none"
            style={{ backgroundColor: "#8dffa8", color: "black" }}>
            Ulteriori informazioni
          </Link>
        </Col>
        <Col xs={8} className=" text-center">
          <h3> DOVE SIAMO</h3>
          <p className="mb-5" style={{ textAlign: "justify" }}>
            Esplora la rete estesa delle nostre sedi, strategicamente posizionate per garantire un accesso pervasivo ai
            servizi di PolyHealth. Qui puoi scoprire dove prende vita la nostra missione di promuovere il benessere
            attraverso servizi medici all'avanguardia e di eccezionale qualità. Ti invitiamo a unirti a noi in questo
            entusiasmante percorso verso una vita più sana, appagante e consapevole, plasmata dalla cura e
            dall'attenzione di PolyHealth.
          </p>
          <Mappa className="mx-auto" />
        </Col>
      </Row>

      <Row className="my-5  justify-content-center">
        <Col xs={12}>
          <h3>LE NOSTRE TERAPIE</h3>
          <p style={{ textAlign: "justify" }}>
            PolyHealth si dedica a fornire ai nostri pazienti trattamenti di alta qualità, eseguiti con l'utilizzo di
            tecnologie all'avanguardia. La qualità della cura e dell'assistenza rappresenta il nostro primario
            obiettivo, in quanto miriamo costantemente a migliorarci per il beneficio dei pazienti che affidano la loro
            salute a noi. Per noi, la qualità va oltre la semplice erogazione di trattamenti medici. Essa incarna la
            nostra dedizione a creare un ambiente in cui la cura è centrata sul paziente, guidata da una costante
            ricerca di eccellenza. Ci impegniamo a valutare attentamente i nostri processi, adottando un approccio
            trasparente e innovativo nell'analisi delle prestazioni. Con PolyHealth, offriamo più di semplici terapie.
            Offriamo un impegno profondo e costante per offrire una cura che cambia la vita, che affronta le sfide in
            modo aperto e ambizioso. Ogni giorno ci sforziamo di definire nuovi standard, per te, per la tua salute e
            per il tuo benessere.
          </p>
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

          <Link
            to="/terapiastore"
            className="p-2 mx-3 text-decoration-none mx-auto"
            style={{ backgroundColor: "#8dffa8", color: "black" }}>
            Scopri tutte le terapie
          </Link>
        </Col>
      </Row>

      <Row className=" justify-content-center mt-5 ">
        <Col xs={12} className="px-5">
          <h3>PRENOTA ORA!</h3>
          <p>
            Con noi hai la comodità di prenotare una terapia presso la sede più prossima in modo rapido e senza sforzi.
            Mettiamo il controllo nelle tue mani, consentendoti di pianificare la tua terapia quando ti è più comodo.
            Abbiamo reso il processo di prenotazione semplice e immediato, mettendo a tua disposizione uno strumento
            online intuitivo che ti permette di scegliere la sede che preferisci e selezionare l'orario che si adatta
            meglio alla tua routine.
          </p>
          <Link
            to="/prenotazioni"
            className="p-2 mx-3 text-decoration-none mx-auto"
            style={{ backgroundColor: "#8dffa8", color: "black" }}>
            Prenota ora
          </Link>
        </Col>
      </Row>

      <Row className=" justify-content-center mt-5 ">
        <Col xs={12}>
          <h3>CONTATTACI</h3>
          <p>
            Qualsiasi incertezza, domanda o curiosità hai, condividila attraverso il nostro modulo. Siamo qui per te e
            risponderemo con prontezza.
          </p>
          <Form data-form-type={formType}>
            <Form.Group className="mb-5 text-center">
              <Form.Label> Nome </Form.Label>
              <Form.Control type="text" placeholder="Nome" required />
            </Form.Group>
            <Form.Group className="mb-5 text-center">
              <Form.Label> Cognome </Form.Label>
              <Form.Control type="text" placeholder="Cognome" required />
            </Form.Group>
            <Form.Group className="mb-5 text-center">
              <Form.Label> Email </Form.Label>
              <Form.Control type="email" placeholder="Email" required />
            </Form.Group>
            <Form.Group className="mb-5 text-center">
              <Form.Label> Numero di Telefono </Form.Label>
              <Form.Control type="number" placeholder="Numero di telefono" required />
            </Form.Group>
            <Form.Group controlId="formTextArea" className=" text-center">
              <Form.Label>Scrivi il tuo messaggio:</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Inserisci qui il tuo messaggio" />
            </Form.Group>
            <Form.Group className="my-5 text-center">
              <Button variant="success" type="button">
                INVIA
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
