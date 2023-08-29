import { Link, useNavigate, useLocation } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import SectionCounter from "../SectionCounter.jsx";
import Mappa from "../Mappa.jsx";
import medico from "../../assets/img/medicoHomePage.png";
import { FaUsers } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { BiPlusMedical } from "react-icons/bi";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Home.css";

function Home() {
  return (
    <Container fluid className="p-0 m-0">
      {/* <Banner /> */}
      <Row className="d-flex justify-content-evenly flex-wrap" style={{ width: "100vw" }}>
        <Col xs={12} id="firstCOL">
          <div>
            <p>
              Medicina all'avanguardia <br />
              con oltre 50 specialità cliniche <br />e più di 700 medici
            </p>
          </div>
          <div>
            <p>
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
      <Row className="mt-5 d-block  " style={{ margin: "auto" }}>
        <Col className="ms-2">
          <h3>CHI SIAMO</h3>
          <FaUsers className="custom-icon" /> <br />
          <p>
            PolyHealth si dedica con passione a potenziare il benessere collettivo, offrendo servizi ambulatoriali
            all'avanguardia per favorire la promozione della salute e garantire la prevenzione e la rilevazione
            tempestiva di condizioni mediche. Il nostro impegno nella diffusione di campagne illuminanti rappresenta un
            pilastro fondamentale del nostro approccio, poiché credmamo fermamente che l'educazione sia alla base di una
            comunità più sana e consapevole.
          </p>
          <Button className="btn_Home">Leggi di più</Button>
        </Col>
        <Col>
          <h3> DOVE SIAMO</h3>
          <GiPositionMarker className="custom-icon" /> <br />
          <p>
            Esplora la rete estesa delle nostre sedi, strategicamente posizionate per garantire un accesso pervasivo ai
            servizi di PolyHealth. Qui puoi scoprire dove prende vita la nostra missione di promuovere il benessere
            attraverso servizi medici all'avanguardia e di eccezionale qualità. Ti invitiamo a unirti a noi in questo
            entusiasmante percorso verso una vita più sana, appagante e consapevole, plasmata dalla cura e
            dall'attenzione di PolyHealth.
          </p>
          <Button className="btn_Home">Visualizza la mappa</Button>
        </Col>
        <Col>
          <h3>LE NOSTRE TERAPIE</h3>
          <BiPlusMedical className="custom-icon" /> <br />
          <p>
            Noi di PolyHealth offriamo ai nostri pazioenti terapie di qualità eseguite con macchinari all'avanguardia La
            Qualità della cura e dell’assistenza è il primo obiettivo di Humanitas, con l’intento di favorire un
            miglioramento continuo, a beneficio dei pazienti. Qualità significa anche capacità di analisi, per misurarci
            e migliorare in modo trasparente e innovativo, equilibrando efficacia clinica, esperienza del paziente e
            sostenibilità.
          </p>
          <Button className="btn_Home">Scopri le terapie</Button>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center flex-wrap mt-5 ">
        <Col xs={12} className="px-5">
          <h3>PRENOTA!</h3>
          <p>
            Con noi hai la comodità di prenotare una terapia presso la sede più prossima in modo rapido e senza sforzi.
            Mettiamo il controllo nelle tue mani, consentendoti di pianificare la tua terapia quando ti è più comodo.
            Abbiamo reso il processo di prenotazione semplice e immediato, mettendo a tua disposizione uno strumento
            online intuitivo che ti permette di scegliere la sede che preferisci e selezionare l'orario che si adatta
            meglio alla tua routine.
          </p>
        </Col>
      </Row>
      {/* <SectionCounter />
          <h3 className="mt-5">CHI SIAMO</h3>
          <p style={{ lineHeight: "25px" }}>
            PolyHealth promuove la salute, la prevenzione e la diagnosi precoce attraverso attività ambulatoriali e
            servizi avanzati e innovativi. PolyHealth è da sempre parte attiva in campagne sull’importanza degli stili
            di vita.
            <br />
            <Link to="/chisiamo" className="text-dark" style={{ fontWeight: "bold" }}>
              Scopri di più
            </Link>
          </p>

          <h3 className="mt-5">LE NOSTRE TERAPIE</h3>
          <p style={{ lineHeight: "25px" }}>
            Noi di PolyHealth offriamo ai nostri pazioenti terapie di qualità eseguite con macchinari all'avanguardia La
            Qualità della cura e dell’assistenza è il primo obiettivo di Humanitas, con l’intento di favorire un
            miglioramento continuo, a beneficio dei pazienti. Qualità significa anche capacità di analisi, per misurarci
            e migliorare in modo trasparente e innovativo, equilibrando efficacia clinica, esperienza del paziente e
            sostenibilità.
            <Link to="/terapiastore" className="text-dark" style={{ fontWeight: "bold" }}>
              Scopri tutte le terapie
            </Link>
          </p>

          <h3 className="mt-5">DOVE SIAMO</h3>
          <Mappa />
          <Link to="/dovesiamo" className="text-dark" style={{ fontWeight: "bold" }}>
            Scopri di più
          </Link> */}
    </Container>
  );
}

export default Home;
