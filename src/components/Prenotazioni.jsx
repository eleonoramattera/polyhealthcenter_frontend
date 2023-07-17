import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";

function Prenotazioni() {
  const [prenotazione, setPrenotazione] = useState({
    nome: "",
    cognome: "",
    email: "",
    nometerapia: "",
    regione: "",
    comune: "",
    data: "",
  });

  const sendReservation = async () => {
    // facciamo una chiamata POST alle api
    try {
      let response = await fetch("http://localhost:8080/api/prenotazioni", {
        method: "POST",
        body: JSON.stringify(prenotazione),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // response contiene l'oggetto di tipo Response che ci darà
      // informazione sull'esito della chiamata
      if (response.ok) {
        // codice 200/201, tutto a posto!
        alert("PRENOTAZIONE SALVATA CORRETTAMENTE!");
        // svuotiamo il form resettando l'oggetto state
        // al suo valore iniziale!
        setPrenotazione({
          nome: "",
          cognome: "",
          email: "",
          nometerapia: "",
          regione: "",
          comune: "",
          data: "",
        });
      } else {
        // errore nei dati inviati? server in crash?
        console.log("errore nella chiamata :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6}>
          <h2>PRENOTA </h2>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("STO PER INVIARE IL FORM!");
              console.log("i dati sono già pronti nello state:", prenotazione);
              sendReservation();
            }}>
            <Form.Group className="mb-3">
              <Form.Label>Inserisci nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci qui il tuo nome"
                required
                value={prenotazione.nome}
                onChange={(e) => {
                  setPrenotazione({
                    ...prenotazione,
                    nome: e.target.value,
                  });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Inserisci cognome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci qui il tuo cognome"
                required
                value={prenotazione.cognome}
                onChange={(e) => {
                  setPrenotazione({
                    ...prenotazione,
                    cognome: e.target.value,
                  });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Inserisci email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserisci qui il tuo email"
                required
                value={prenotazione.email}
                onChange={(e) => {
                  setPrenotazione({
                    ...prenotazione,
                    email: e.target.value,
                  });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Inserisci nome terapia</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci qui nome terapia"
                required
                value={prenotazione.nometerapia}
                onChange={(e) => {
                  setPrenotazione({
                    ...prenotazione,
                    nometerapia: e.target.value,
                  });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Inserisci regione </Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci regione"
                required
                value={prenotazione.regione}
                onChange={(e) => {
                  setPrenotazione({
                    ...prenotazione,
                    regione: e.target.value,
                  });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Inserisci comune</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci qui comune"
                required
                value={prenotazione.comune}
                onChange={(e) => {
                  setPrenotazione({
                    ...prenotazione,
                    comune: e.target.value,
                  });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Data e ora</Form.Label>
              <Form.Control
                type="datetime-local"
                required
                value={prenotazione.data}
                onChange={(e) => {
                  setPrenotazione({
                    ...prenotazione,
                    data: e.target.value,
                  });
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              PRENOTA!
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default Prenotazioni;
