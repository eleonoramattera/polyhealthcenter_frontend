import { useState, useEffect } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function Pren() {
  const location = useLocation();
  console.log("LOCATION", location);

  const [id, setId] = useState(0);
  const [nomeTerapia, setNomeTerapia] = useState([]);
  const [dataPrenotazione, setDataPrenotazione] = useState("");
  const [sede, setSede] = useState("");
  const [nomeUtente, setNomeUtente] = useState("");
  const [cognomeUtente, setCognomeUtente] = useState("");
  const [emailUtente, setEmailUtente] = useState("");

  function getFormattedDateTime(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  /////////////////
  /////////////////////////////////
  function handleDateTimeChange(e) {
    const selectedDateTime = e.target.value;
    const selectedDate = selectedDateTime.split("T")[0];
    const selectedTime = selectedDateTime.split("T")[1];

    if (isDateTimeValid(selectedDate, selectedTime)) {
      setDataPrenotazione(selectedDateTime);
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

  // Funzione di validazione per disabilitare l'ora dalle 19 alle 8
  const formData = {
    id,
    nomeTerapia,
    dataPrenotazione,
    sede,
    nomeUtente,
    cognomeUtente,
    emailUtente,
  };

  const generateRandomId = () => {
    const randomNum = Math.floor(Math.random() * 100000);
    setId(randomNum);
  };

  const sendReservation = async () => {
    // facciamo una chiamata POST alle api
    // Controlla se la terapia è già prenotata nella stessa sede e nello stesso orario
    const isTerapiaOccupata = prenotazioniEsistenti.some(
      (prenotazione) =>
        prenotazione.nomeTerapia === nomeTerapia &&
        prenotazione.sede === sede &&
        prenotazione.dataPrenotazione === dataPrenotazione
    );

    if (isTerapiaOccupata) {
      alert("La terapia selezionata è già prenotata per la data e la sede scelta.");
      return;
    }

    // Controlli per assicurarsi che tutti i campi siano stati compilati
    if (!nomeTerapia || !dataPrenotazione || !sede || !nomeUtente || !cognomeUtente || !emailUtente) {
      alert("Tutti i campi sono obbligatori. Assicurati di compilare tutti i campi prima di procedere.");
      return;
    }
    try {
      let response = await fetch("http://localhost:8080/api/prenotazioni", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("PRENOTAZIONE SALVATA CORRETTAMENTE!");
        setNomeTerapia("");
        setDataPrenotazione("");
        setSede("");
        setNomeUtente("");
        setCognomeUtente("");
        setEmailUtente("");
      } else {
        alert("ERRORE!");
        console.log("errore nella chiamata :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [pre, setPre] = useState([]);
  const [prenotazioniEsistenti, setPrenotazioniEsistenti] = useState([]);

  const getAllPren = async () => {
    try {
      let resp = await fetch("http://localhost:8080/api/prenotazioni");
      if (resp.ok) {
        let data = await resp.json();
        setPre(data);
        setPrenotazioniEsistenti(data);
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
    generateRandomId();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6}>
          <h2>PRENOTA </h2>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("STO PER INVIARE IL FORM!");
              console.log("i dati sono già pronti nello state:", formData);
              sendReservation();
            }}>
            <Form.Group className="mb-3">
              <Form.Label> Numero Prenotazione</Form.Label>
              <Form.Control type="number" placeholder="Cognome" required value={id} readOnly disabled />
            </Form.Group>

            {/*  <div>
              <label>
                Numero Prenotazione
                <input type="number" value={id} readOnly disabled />
                {/* <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
              </label>
            </div>*/}

            <Form.Group className="mb-3">
              <Form.Label>Terapia</Form.Label>
              <Form.Select required value={nomeTerapia} onChange={(e) => setNomeTerapia(e.target.value)}>
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
            {/* 
            <div>
              <label>
                Nome Terapia:
                <select value={nomeTerapia} onChange={(e) => setNomeTerapia(e.target.value)}>
                  <option value="">Seleziona una terapia</option>
                  <option value="visitaneurologica">Visita neurologica</option>
                  <option value="visitaodontoiatrica">Visita odontoiatrica</option>
                  <option value="visita otorinolaringoiatrica">Visita otorinolaringoiatrica</option>
                  <option value="visitapneumologica">Visita pneumologica</option>
                  <option value="visitaepatologica">Visita epatologica</option>
                  <option value="visitadermatologica">Visita dermatologica</option>
                  <option value="esamecampovisivo"> Esame campo visivo</option>
                  <option value="MOC">MOC</option>
                  <option value="visitasenologica">Visita senologica</option>
                  <option value="visitacardiologica">Visita cardiologica</option>
                  <option value="visitadichirurgiapancreatica">Visita di chirurgia pancreatica</option>
                  <option value="visitatricologica">Visita tricologica</option>
                  <option value="visitanefrologica">Visita nefrologica</option>
                  <option value="visitaoncoematologica">Visita onco-ematologica</option>
                  <option value="visitapodologica">Visita podologica</option>
                </select>
              </label>
            </div>
            */}
            {/* <div>
              <label>
                Terapie:
                <select id="terapia" value={nomeTerapia} onChange={(e) => setNomeTerapia(e.target.value)} />
                <option value="">
                  Seleziona una terapia
                  {nomeTerapia.map((terapia) => (
                    <option key={terapia.id} value={terapia.nome}>
                      {terapia.nome}
                    </option>
                  ))}
                </option>
              </label>
            </div>
                  */}
            {/* <DatePicker
              id="dataPrenotazione"
              selected={dataPrenotazione}
              onChange={(date) => setDataPrenotazione(date)}
              minDate={new Date()} // Impedisce di selezionare date precedenti ad oggi
              filterDate={isWeekday} // Disabilita sabato e domenica
              showTimeSelect // Mostra l'ora
              timeFormat="HH:mm" // Formato dell'ora
              timeIntervals={15} // Intervallo tra le opzioni dell'ora
              dateFormat="yyyy-MM-dd HH:mm" // Formato data e ora
              required
            /> */}
            {/* 
            <div>
              <label>
                Data Prenotazione:
                <input
                  type="datetime-local"
                  value={dataPrenotazione}
                  min={getFormattedDateTime(new Date())}
                  max={getFormattedDateTime(new Date(Date.now() + 365 * 24 * 60 * 60 * 1000))} // Imposta il limite massimo a 1 anno da oggi
                  onChange={handleDateTimeChange}
                />
              </label>
            </div>
          */}

            <Form.Group className="mb-3">
              <Form.Label>Data e ora</Form.Label>
              <Form.Control
                type="datetime-local"
                required
                value={dataPrenotazione}
                min={getFormattedDateTime(new Date())}
                max={getFormattedDateTime(new Date(Date.now() + 365 * 24 * 60 * 60 * 1000))} // Imposta il limite massimo a 1 anno da oggi
                onChange={handleDateTimeChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Sede</Form.Label>
              <Form.Select required value={sede} onChange={(e) => setSede(e.target.value)}>
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
            {/* 
            <div>
              <label>
                Sede:
                <select value={sede} onChange={(e) => setSede(e.target.value)}>
                  <option value="">Seleziona una sede</option>
                  <option value="alghero">Alghero</option>
                  <option value="ancona">Ancona</option>
                  <option value="aosta">Aosta</option>
                  <option value="arezzo">Arezzo</option>
                  <option value="avellino">Avellino</option>
                  <option value="bologna">Bologna</option>
                  <option value="brescia">Brescia</option>
                  <option value="catania">Catania</option>
                  <option value="cosenza">Cosanza</option>
                  <option value="forli">Forlì</option>
                  <option value="frosinone">Frosinone</option>
                  <option value="genova">Genova</option>
                  <option value="laquila">L'Aquila</option>
                  <option value="lecce">Lecce</option>
                  <option value="mantova">Mantova</option>
                  <option value="milano">Milano</option>
                  <option value="napoli">Napoli</option>
                  <option value="padova">Padova</option>
                  <option value="palermo">Palermo</option>
                  <option value="perugia">Perugia</option>
                  <option value="potenza">Potenza</option>
                  <option value="reggiocalabria">Reggio Calabria</option>
                  <option value="roma">Roma</option>
                  <option value="salerno">Salerno</option>
                  <option value="termoli">Termoli</option>
                  <option value="torino">Torino</option>
                  <option value="trento">Trento</option>
                  <option value="udine">Udine</option>
                </select>
              </label>
            </div>
*/}
            <Form.Group className="mb-3">
              <Form.Label>Inserisci il tuo nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome"
                required
                value={nomeUtente}
                onChange={(e) => setNomeUtente(e.target.value)}
              />
            </Form.Group>
            {/*  <div>
              <label>
                Nome Utente:
                <input type="text" value={nomeUtente} onChange={(e) => setNomeUtente(e.target.value)} />
              </label>
            </div>
          
            <div>
              <label>
                Cognome Utente:
                <input type="text" value={cognomeUtente} onChange={(e) => setCognomeUtente(e.target.value)} />
              </label>
            </div>
          */}
            <Form.Group className="mb-3">
              <Form.Label>Inserisci il tuo cognome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cognome"
                required
                value={cognomeUtente}
                onChange={(e) => setCognomeUtente(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Inserisci la tue Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                required
                value={emailUtente}
                onChange={(e) => setEmailUtente(e.target.value)}
              />
            </Form.Group>
            {/* <div>
              <label>
                Email:
                <input type="email" value={emailUtente} onChange={(e) => setEmailUtente(e.target.value)} />
              </label>
            </div>
            */}

            <Button style={{ backgroundColor: "#2b5453", border: "none" }} type="submit">
              PRENOTA!
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/lemieprenotazioni">
            <Button
              style={{ backgroundColor: "#2b5453", border: "none", position: "absolute", top: "135px", right: "12px" }}>
              Le mie prenotazioni
            </Button>
          </Link>
          {/*   <LeMiePrenotazioni pre={pre} /> */}
        </Col>
      </Row>
    </Container>
  );
}
export default Pren;
