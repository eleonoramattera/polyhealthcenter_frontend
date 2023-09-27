import { useEffect, useState } from "react";
import { useSelector } from "react-redux"; // Se stai usando Redux per la gestione dello stato
import { Row, Col, Button, Modal, Form } from "react-bootstrap";

function PrenotazioniList() {
  const [prenotazioni, setPrenotazioni] = useState([]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [editedPrenotazione, setEditedPrenotazione] = useState(null);
  const [editedDataPrenotazione, setEditedDataPrenotazione] = useState("");
  const [editedSede, setEditedSede] = useState("");
  const [editedTerapia, setEditedTerapia] = useState("");

  const username = useSelector((state) => state.user.username); // Assumi che user.email sia il campo contenente l'email dell'utente autenticato
  console.log("username", username);
  const token = useSelector((state) => state.user.token);

  const fetchPrenotazioni = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/prenotazioni/mie-prenotazioni/${username}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Errore nella richiesta HTTP: " + response.status);
      }
      const data = await response.json();
      console.log("pernotazioni con username", data);
      setPrenotazioni(data);
    } catch (error) {
      console.error("Si è verificato un errore:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/prenotazioni/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Errore nella richiesta HTTP: " + response.status);
      }
      // Se l'eliminazione ha successo, aggiorna l'elenco delle prenotazioni chiamando fetchPrenotazioni
      await fetchPrenotazioni();
      alert("Prenotazione eliminata con successo");
    } catch (error) {
      console.error("Si è verificato un errore durante l'eliminazione:", error);
    }
  };

  const handleEdit = async () => {
    try {
      if (!editedPrenotazione) {
        throw new Error("Nessuna prenotazione selezionata per la modifica");
      }

      const response = await fetch(`http://localhost:8080/api/prenotazioni/${editedPrenotazione.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dataPrenotazione: editedDataPrenotazione,
          sede: editedSede,
          nomeTerapia: editedTerapia,
        }),
      });
      if (!response.ok) {
        throw new Error("Errore nella richiesta HTTP: " + response.status);
      }

      // Se la modifica ha successo, chiudi il modale
      setShowEditModal(false);

      // Aggiorna l'elenco delle prenotazioni chiamando fetchPrenotazioni
      await fetchPrenotazioni();
      alert("Prenotazione modificata con successo");
    } catch (error) {
      console.error("Si è verificato un errore durante la modifica:", error);
    }
  };

  const openEditModal = (prenotazione) => {
    setEditedPrenotazione(prenotazione);
    setEditedDataPrenotazione(prenotazione.dataPrenotazione);
    setEditedSede(prenotazione.sede);
    setEditedTerapia(prenotazione.nomeTerapia);
    setShowEditModal(true);
  };

  function getFormattedDateTime(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  function handleDateTimeChange(e) {
    const selectedDateTime = e.target.value;
    const selectedDate = selectedDateTime.split("T")[0];
    const selectedTime = selectedDateTime.split("T")[1];

    if (isDateTimeValid(selectedDate, selectedTime)) {
      setEditedDataPrenotazione(selectedDateTime);
    } else {
      // Puoi gestire l'errore in qualche modo, come mostrando un messaggio all'utente
      alert("La data e l'ora selezionate non sono valide. Siamo aperti dal lunedì al venerdì dalle 8 alle 19.");
    }
  }

  // Funzione di validazione per disabilitare sabati e domeniche e l'ora dalle 19 alle 8
  function isDateTimeValid(date, time) {
    const selectedDayOfWeek = new Date(date).getDay();
    const selectedHour = Number(time.split(":")[0]);

    // Disabilita la selezione di sabati (6 = sabato) e domeniche (0 = domenica)
    if (selectedDayOfWeek === 0 || selectedDayOfWeek === 6) {
      return false;
    }

    // Disabilita la selezione dell'ora dalle 19 alle 8 (8 <= ora < 19)
    return selectedHour >= 8 && selectedHour < 19;
  }

  function isDataPassata(dataPrenotazione) {
    const dataPrenotazioneObj = new Date(dataPrenotazione);
    const dataCorrente = new Date();
    return dataPrenotazioneObj < dataCorrente;
  }

  //TERAPIE
  const [terapie, setTerapie] = useState([]);

  const fetchTerapie = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/terapie`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Errore nella richiesta HTTP: " + response.status);
      }
      const data = await response.json();
      setTerapie(data);
    } catch (error) {
      console.error("Si è verificato un errore:", error);
    }
  };

  //SEDI
  const [sedi, setSedi] = useState([]);

  const fetchSedi = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/sedi`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Errore nella richiesta HTTP: " + response.status);
      }
      const data = await response.json();
      setSedi(data);
    } catch (error) {
      console.error("Si è verificato un errore:", error);
    }
  };

  useEffect(() => {
    // Carica le prenotazioni quando il componente viene montato
    fetchPrenotazioni();
    fetchTerapie();
    fetchSedi();
  }, [username, token]);

  return (
    <Row>
      <Col xs={12} className="d-flex flex-column align-items-center">
        <h2 className="mb-4 text-success">LE MIE PRENOTAZIONI</h2>
        <ul>
          {prenotazioni.map((prenotazione) => (
            <li key={prenotazione.id}>
              <span className="fw-bold">Terapia </span> : {prenotazione.nomeTerapia} <br />
              <span className="fw-bold"> Sede</span>: {prenotazione.sede} <br />
              <span className="fw-bold"> Data prenotazione</span>: {prenotazione.dataPrenotazione} <br />
              <Button
                variant="success"
                className="p-1 me-2"
                onClick={() => openEditModal(prenotazione)}
                disabled={isDataPassata(prenotazione.dataPrenotazione)}>
                Modifica
              </Button>
              <Button variant="success" className="p-1" onClick={() => handleDelete(prenotazione.id)}>
                Elimina
              </Button>
              <hr />
            </li>
          ))}
        </ul>
      </Col>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Prenotazione</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEditDataPrenotazione">
              <Form.Label>Data Prenotazione</Form.Label>
              <Form.Control
                type="datetime-local"
                value={editedDataPrenotazione}
                min={getFormattedDateTime(new Date())}
                max={getFormattedDateTime(new Date(Date.now() + 365 * 24 * 60 * 60 * 1000))}
                onChange={((e) => setEditedDataPrenotazione(e.target.value), handleDateTimeChange)}
              />
            </Form.Group>
            <Form.Group controlId="formEditSedePrenotazione">
              <Form.Label>Sede</Form.Label>
              <Form.Control as="select" value={editedSede} onChange={(e) => setEditedSede(e.target.value)}>
                <option value="">Seleziona una Sede</option>
                {sedi.map((sede) => (
                  <option key={sede.id}>{sede.comune}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formEditTerapia">
              <Form.Label>Terapia</Form.Label>
              <Form.Control as="select" value={editedTerapia} onChange={(e) => setEditedTerapia(e.target.value)}>
                <option value="">Seleziona una terapia</option>
                {terapie.map((terapia) => (
                  <option key={terapia.id}>{terapia.nome}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={handleEdit}>
            Salva Modifiche e Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
}

export default PrenotazioniList;
