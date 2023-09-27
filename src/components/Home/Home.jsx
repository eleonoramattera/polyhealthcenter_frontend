import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

import Mappa from "../Mappa.jsx";
import medico from "../../assets/img/medicoHomePage copia.png";
import medici from "../../assets/img/medici.jpg";
import ospedale from "../../assets/img/hospital.jpg";

import "./Home.css";

function Home({ formType }) {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  console.log(isAuthenticated);

  useEffect(() => {
    console.log("isAuthenticated is :", isAuthenticated);
  }, [isAuthenticated]);

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

  return (
    <Container fluid className="p-0 m-0">
      {isAuthenticated ? (
        <>
          <Row className="d-flex justify-content-between" style={{ width: "100vw" }}>
            <Col xs={10} className="d-flex flex-column firstColHome">
              <div>
                <h1 className="my-5 ">
                  MEDICINA ALL'AVANGUARDIA <br />
                  CON OLTRE 50 SPECIALITA' CLINICHE <br />E PIU' DI 700 MEDICI
                </h1>
                <p>
                  PolyHealth promuove la salute, la prevenzione e la diagnosi precoce <br />
                  attraverso attività ambulatoriali e servizi avanzati e innovativi. <br />
                  PolyHealth è da sempre parte attiva <br />
                  in campagne sull’importanza degli stili di vita.
                </p>
              </div>
            </Col>
            <Col xs={2} className=" secondColHome">
              <img src={medico} alt="medico" />
            </Col>
          </Row>
          <Row className="my-5 " style={{ margin: "auto", width: "100%" }}>
            <Col xs={6} className="ms-2" style={{ textAlign: "justify" }}>
              <h3>CHI SIAMO</h3>
              <p>
                PolyHealth si impegna con fervore a innalzare il livello di benessere dell'intera comunità. Attraverso
                l'offerta di servizi ambulatoriali all'avanguardia, miriamo a costruire un futuro più sano e vibrante
                per tutti. Il nostro impegno è radicato nella promozione attiva della salute, nella protezione
                dall'insorgenza di condizioni mediche e nella tempestiva individuazione di potenziali problematiche.
                Riconosciamo l'importanza di agire in anticipo, e questo si riflette nella nostra dedizione a sostenere
                una cultura di prevenzione. La nostra gamma di servizi non si limita a trattare le patologie esistenti,
                ma si estende anche a educare e fornire risorse per prevenire tali condizioni in primo luogo. Crediamo
                che la prevenzione sia il primo passo verso un futuro più sano e ci impegniamo a guidare questa
                iniziativa con soluzioni innovative.
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
                Siamo dedicati a portare la cura e la professionalità vicino a te, attraverso diverse sedi
                strategicamente posizionate. Ogni sede è attrezzata con personale altamente qualificato e attrezzature
                all'avanguardia, per garantire il massimo standard di assistenza. Siamo pronti ad accoglierti e a
                prenderti cura di te, ovunque tu sia.
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
                Esplora la rete estesa delle nostre sedi, strategicamente posizionate per garantire un accesso pervasivo
                ai servizi di PolyHealth. Qui puoi scoprire dove prende vita la nostra missione di promuovere il
                benessere attraverso servizi medici all'avanguardia e di eccezionale qualità. Ti invitiamo a unirti a
                noi in questo entusiasmante percorso verso una vita più sana, appagante e consapevole, plasmata dalla
                cura e dall'attenzione di PolyHealth.
              </p>
              <Mappa className="mx-auto" />
            </Col>
          </Row>

          <Row className="my-5  justify-content-center">
            <Col xs={12} className="pb-5 text-center">
              <h3>LE NOSTRE TERAPIE</h3>
              <p className="px-3" style={{ textAlign: "justify" }}>
                PolyHealth si dedica a fornire ai nostri pazienti trattamenti di alta qualità, eseguiti con l'utilizzo
                di tecnologie all'avanguardia. La qualità della cura e dell'assistenza rappresenta il nostro primario
                obiettivo, in quanto miriamo costantemente a migliorarci per il beneficio dei pazienti che affidano la
                loro salute a noi. Per noi, la qualità va oltre la semplice erogazione di trattamenti medici. Essa
                incarna la nostra dedizione a creare un ambiente in cui la cura è centrata sul paziente, guidata da una
                costante ricerca di eccellenza. Ci impegniamo a valutare attentamente i nostri processi, adottando un
                approccio trasparente e innovativo nell'analisi delle prestazioni. Con PolyHealth, offriamo più di
                semplici terapie. Offriamo un impegno profondo e costante per offrire una cura che cambia la vita, che
                affronta le sfide in modo aperto e ambizioso. Ogni giorno ci sforziamo di definire nuovi standard, per
                te, per la tua salute e per il tuo benessere.
              </p>
              {isError && <Alert variant="danger">Qualcosa è andato storto :(</Alert>}
              {isLoading && (
                <div className="text-center px-5">
                  <Spinner animation="border" role="status" variant="success">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              )}
              <div
                style={{ display: "flex", flexWrap: "wrap", width: "70%", justifyContent: "center", margin: "auto" }}>
                {terapie.map((ter) => (
                  <div
                    key={ter._id}
                    className="my-4 text-center"
                    style={{
                      width: "40%",
                      margin: "10px",
                      padding: "10px",
                      border: "6px solid #8dffa8",
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
            <Col xs={12} className="px-5 text-center">
              <h3>PRENOTA ORA!</h3>
              <p className="px-3" style={{ textAlign: "justify" }}>
                Con noi hai la comodità di prenotare una terapia presso la sede più prossima in modo rapido e senza
                sforzi. Mettiamo il controllo nelle tue mani, consentendoti di pianificare la tua terapia quando ti è
                più comodo. Abbiamo reso il processo di prenotazione semplice e immediato, mettendo a tua disposizione
                uno strumento online intuitivo che ti permette di scegliere la sede che preferisci e selezionare
                l'orario che si adatta meglio alla tua routine.
              </p>
              <Link
                to="/prenotazioni"
                className="p-2 mx-3 text-decoration-none mx-auto"
                style={{ backgroundColor: "#8dffa8", color: "black" }}>
                Prenota ora
              </Link>
            </Col>
          </Row>
        </>
      ) : (
        <>
          <Row className="w-100">
            <Col className="text-center">
              <p>Devi essere autenticato per visualizzare i contenuti.</p>
              <p>
                <Link to="/registrazione" className="text-decoration-none fw-bold text-success ">
                  Premi qui
                </Link>
                per registrarti
              </p>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Home;
