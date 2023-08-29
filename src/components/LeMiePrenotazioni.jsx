import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { BiSolidPencil } from "react-icons/bi";
import { Row, Col, Container, Form } from "react-bootstrap";

const LeMiePrenotazioni = () => {
  const [pren, setPre] = useState([]);

  const getAllPren = async () => {
    try {
      let resp = await fetch("http://localhost:8080/api/prenotazioni");
      if (resp.ok) {
        let data = await resp.json();
        setPre(data);
        console.log("PRENOTAZINIII", data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPren();
  }, []);
  function handleDateTimeChange(e) {
    const selectedDateTime = e.target.value;
    const selectedDate = selectedDateTime.split("T")[0];
    const selectedTime = selectedDateTime.split("T")[1];

    if (isDateTimeValid(selectedDate, selectedTime)) {
      setPre(selectedDateTime);
    } else {
      // Puoi gestire l'errore in qualche modo, come mostrando un messaggio all'utente
      alert(
        "La data e l'ora selezionate non sono valide. Siamo aperti dalle 8 alle 19 e non lavoriamo di sabato e domenica."
      );
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

  function getFormattedDateTime(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  ///////////
  const removePrenotazione = (id) => {
    // Filtra le prenotazioni e rimuovi quella con l'id corrispondente
    const updatedPrenotazioni = prenotazioniFiltrate.filter((prenotazione) => prenotazione.id !== id);
    setPrenotazioniFiltrate(updatedPrenotazioni);
    setIsPrenotazioneEliminata(true);

    // Nascondi il messaggio dopo 3 secondi
    setTimeout(() => {
      setIsPrenotazioneEliminata(false);
    }, 3000);
  };

  const [emailFiltrata, setEmailFiltrata] = useState("");
  const [prenotazioniFiltrate, setPrenotazioniFiltrate] = useState([]);

  const filtraPrenotazioniPerEmail = () => {
    const prenotazioniFiltrate = pren.filter((prenotazione) => prenotazione.emailUtente === emailFiltrata);
    setPrenotazioniFiltrate(prenotazioniFiltrate);
  };

  // Chiama la funzione di filtraggio quando l'utente cambia l'email nel campo di input
  const handleEmailChange = (e) => {
    setEmailFiltrata(e.target.value);
  };

  // Chiama la funzione di filtraggio quando l'utente invia il form
  const handleSubmit = (e) => {
    e.preventDefault();
    filtraPrenotazioniPerEmail();
  };
  //////////////////////////////////////////////////////////
  const [editingIndex, setEditingIndex] = useState(null);
  const [isPrenotazioneModificata, setIsPrenotazioneModificata] = useState(false);
  const [isPrenotazioneEliminata, setIsPrenotazioneEliminata] = useState(false);

  const startEditing = (index) => {
    setEditingIndex(index);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const { id, nomeTerapia, sede, dataPrenotazione, emailUtente } = e.target.elements;

    const updatedPrenotazione = {
      id: Number(id.value),
      nomeTerapia: nomeTerapia.value,
      sede: sede.value,
      dataPrenotazione: dataPrenotazione.value,
      emailUtente: emailUtente.value,
    };

    const updatedPrenotazioni = [...prenotazioniFiltrate];
    updatedPrenotazioni[editingIndex] = updatedPrenotazione;
    setPrenotazioniFiltrate(updatedPrenotazioni);

    setEditingIndex(null);

    setIsPrenotazioneModificata(true);
    setTimeout(() => {
      setIsPrenotazioneModificata(false);
    }, 3000);
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6}>
          <div>
            <h4>Inserisci la tua email per vedere le prenotazioni effettuate:</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Control type="email" value={emailFiltrata} onChange={handleEmailChange} />
              <Button className="btn mt-2 me-2" style={{ backgroundColor: "#2b5453", border: "none" }} type="submit">
                Visualizza Prenotazioni
              </Button>
            </Form>
            {prenotazioniFiltrate.length > 0 ? (
              <div>
                <p>
                  Prenotazioni per l'email:<b> {emailFiltrata}</b>
                </p>
                <ul>
                  {prenotazioniFiltrate.map((prenotazione, index) => (
                    <li key={prenotazione.id} className=" mt-5 px-5 text-start">
                      TERAPIA: {prenotazione.nomeTerapia} <br />
                      SEDE: {prenotazione.sede} <br />
                      DATA: {prenotazione.dataPrenotazione} <br />
                      {editingIndex === index ? (
                        <div style={{ border: "2px solid #2b5453", padding: "10px", borderRadius: "6px" }}>
                          <Form onSubmit={handleEdit}>
                            <Form.Group className="mb-3">
                              <Form.Control type="hidden" name="id" value={prenotazione.id} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                              <Form.Label>Terapia prenotata</Form.Label>
                              <Form.Select type="text" name="nomeTerapia" defaultValue={prenotazione.nomeTerapia}>
                                <option value="">Seleziona una terapia</option>
                                <option>Visita neurologica</option>
                                <option>Visita odontoiatrica</option>
                                <option>Visita otorinolaringoiatrica</option>
                                <option>Visita pneumologica</option>
                                <option>Visita epatologica</option>
                                <option>Visita dermatologica</option>
                                <option> Esame campo visivo</option>
                                <option>MOC</option>
                                <option>Visita senologica</option>
                                <option>Visita cardiologica</option>
                                <option>Visita di chirurgia pancreatica</option>
                                <option>Visita tricologica</option>
                                <option>Visita nefrologica</option>
                                <option>Visita onco-ematologica</option>
                                <option>Visita podologica</option>
                              </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                              <Form.Label>Sede prenotata</Form.Label>
                              <Form.Select type="text" name="sede" defaultValue={prenotazione.sede}>
                                <option value="">Seleziona una sede</option>
                                <option>Alghero</option>
                                <option>Ancona</option>
                                <option>Aosta</option>
                                <option>Arezzo</option>
                                <option>Avellino</option>
                                <option>Bologna</option>
                                <option>Brescia</option>
                                <option>Catania</option>
                                <option>Cosanza</option>
                                <option>Forlì</option>
                                <option>Frosinone</option>
                                <option>Genova</option>
                                <option>L'Aquila</option>
                                <option>Lecce</option>
                                <option>Mantova</option>
                                <option>Milano</option>
                                <option>Napoli</option>
                                <option>Padova</option>
                                <option>Palermo</option>
                                <option>Perugia</option>
                                <option>Potenza</option>
                                <option>Reggio Calabria</option>
                                <option>Roma</option>
                                <option>Salerno</option>
                                <option>Termoli</option>
                                <option>Torino</option>
                                <option>Trento</option>
                                <option>Udine</option>
                              </Form.Select>
                            </Form.Group>

                            {/*   <input type="hidden" name="id" value={prenotazione.id} />
                          <input type="text" name="nomeTerapia" defaultValue={prenotazione.nomeTerapia} />
                          <input type="text" name="sede" defaultValue={prenotazione.sede} />
                          <input
                            type="datetime-local"
                            name="dataPrenotazione"
                            defaultValue={prenotazione.dataPrenotazione}
                          />
                            <input type="email" name="emailUtente" defaultValue={prenotazione.emailUtente} disabled />

                            <Form.Group className="mb-3">
                              <Form.Label>Data Prenotazione</Form.Label>
                              <Form.Control
                                type="datetime-local"
                                name="dataPrenotazione"
                                defaultValue={prenotazione.dataPrenotazione}
                              />
                            </Form.Group>
                          */}
                            <Form.Group className="mb-3">
                              <Form.Label>Data Prenotazione</Form.Label>
                              <Form.Control
                                type="datetime-local"
                                name="dataPrenotazione"
                                defaultValue={prenotazione.dataPrenotazione}
                                min={getFormattedDateTime(new Date())}
                                max={getFormattedDateTime(new Date(Date.now() + 365 * 24 * 60 * 60 * 1000))} // Imposta il limite massimo a 1 anno da oggi
                                onChange={handleDateTimeChange}
                              />
                            </Form.Group>

                            <Form.Group className="mb-3">
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                type="email"
                                name="emailUtente"
                                defaultValue={prenotazione.emailUtente}
                                disabled
                              />
                            </Form.Group>

                            <Button
                              size="sm"
                              className="btn mt-2 me-2"
                              style={{ backgroundColor: "#2b5453", border: "none" }}
                              type="submit">
                              Salva
                            </Button>

                            <Button
                              size="sm"
                              className="btn mt-2"
                              style={{ backgroundColor: "#2b5453", border: "none" }}
                              onClick={() => setEditingIndex(null)}>
                              Annulla
                            </Button>
                          </Form>
                        </div>
                      ) : (
                        <>
                          <Button
                            className="btn mt-2 me-2"
                            style={{ backgroundColor: "#2b5453", border: "none" }}
                            onClick={() => removePrenotazione(prenotazione.id)}>
                            <MdDelete /> Elimina
                          </Button>
                          <Button
                            className="btn mt-2"
                            style={{ backgroundColor: "#2b5453", border: "none" }}
                            onClick={() => startEditing(index)}>
                            <BiSolidPencil /> Modifica
                          </Button>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="mt-4">Nessuna prenotazione trovata per l'email specificata</p>
            )}
          </div>
        </Col>
      </Row>
      {isPrenotazioneModificata && <div className="sfocato">Prenotazione modificata con successo</div>}
      {isPrenotazioneEliminata && <div className="sfocato">Prenotazione eliminata correttamente</div>}
    </Container>
  );
};

export default LeMiePrenotazioni;
