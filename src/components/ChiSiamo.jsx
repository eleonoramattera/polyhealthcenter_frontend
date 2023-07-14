import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function ChiSiamo() {
  return (
    <Row className="justify-content-center mt-5">
      <Col xs={12} md={8} style={{ textAlign: "justify" }}>
        <h2>PolyHealth</h2>
        <p style={{ borderBottom: "2px solid gray", paddingBottom: "20px" }}>
          PolyHealth è considerato uno degli ospedali tecnologicamente più avanzati in Italia. Fra le tecnologie più
          all’avanguardia a disposizione dei pazienti, acceleratori lineari di ultima generazione per la Radioterapia
          per la cura dei tumori, robot in sala operatoria per una chirurgia sempre meno invasiva, laser di ultima
          generazione in Oculistica, sistemi di riduzione dei raggi in Radiologia, 3 Tac nelle sale operatorie
          utilizzate durante gli interventi di Neurochirurgia. Noi di PolyHealth ritiamo fondamentale associare
          efficienza organizzativa e qualità clinica. Per questo siamo il primo policlinico italiano ad essere
          certificato per la qualità da Joint Commission International. Considerato da Harvard University come uno dei 4
          ospedali più innovativi al mondo, PolyHealth è un case study per il suo modello organizzativo che coniuga
          sostenibilità economica, sviluppo e responsabilità sociale.
        </p>

        <h5 className="mt-5">LA NOSTRA MISSION</h5>
        <p>
          Mission Migliorare la vita dei nostri pazienti, grazie a cure sempre più efficaci e a un’organizzazione
          innovativa e sostenibile. Investire in una ricerca che abbia un impatto concreto sul progresso della Medicina.
          Formare una nuova generazione di professionisti attraverso un modello che unisce Clinica, Ricerca e
          Università.
        </p>

        <h5 className="mt-5 mb-3">I NOSTRI VALORI</h5>
        <p className="d-flex justify-content-between">
          <Card style={{ width: "15rem", borderRadius: "30px" }}>
            <Card.Body>
              <Card.Title>Eccellenza</Card.Title>
              <Card.Text>
                Offrire ai nostri pazienti le cure e l’assistenza migliori con macchinari di ultima generazione.
                Coniugare sviluppo, sostenibilità economica e responsabilità sociale. Curare ogni dettaglio, perché è
                l'eccelenza la cosa in sé che ci porta lontano.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "15rem", borderRadius: "30px" }}>
            <Card.Body>
              <Card.Title>Innovazione </Card.Title>
              <Card.Text>
                Investire nella ricerca clinico-scientifica e in tecnologie all’avanguardia per trovare costantemente
                nuove cure. Sviluppare modelli organizzativi e gestionali fondati sulla qualità dei percorsi di cura.
                Formare una nuova generazione di professionisti
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "15rem", borderRadius: "30px" }}>
            <Card.Body>
              <Card.Title> Professionalità</Card.Title>
              <Card.Text>
                Essere una grande comunità di professionisti che cresce ogni giorno e che lavora in squadra per
                raggiungere obiettivi comuni. Garantire a chi merita possibilità di crescita professionale. Essere di
                esempio gli uni per gli altri.
              </Card.Text>
            </Card.Body>
          </Card>
        </p>
      </Col>
    </Row>
  );
}

export default ChiSiamo;
