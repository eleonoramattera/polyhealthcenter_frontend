import { useState, useEffect } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Pren() {
  const [id, setId] = useState(0);
  const [nomeTerapia, setNomeTerapia] = useState("");
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

  {
    /*  // Funzione per gestire il cambiamento della data e dell'ora
  function handleDateTimeChange(e) {
    const selectedDateTime = e.target.value;
    if (isDateTimeValid(selectedDateTime)) {
      setDataPrenotazione(selectedDateTime);
    } else {
      // Puoi gestire l'errore in qualche modo, come mostrando un messaggio all'utente
      alert("L'ora selezionata non è valida. Siamo aperti dalle 8 alle 19");
    }
  }

  function handleDateChange(e) {
    const selectedDate = e.target.value;

    // Ottieni il giorno della settimana della data selezionata
    const selectedDayOfWeek = new Date(selectedDate).getDay();

    // Disabilita la selezione di sabati e domeniche (0 = domenica, 6 = sabato)
    if (selectedDayOfWeek === 0 || selectedDayOfWeek === 6) {
      alert("sabato e domenica siamo chiusi");
    }

    setDataPrenotazione(selectedDate);
  }

  // Funzione di validazione per disabilitare l'ora dalle 19 alle 8
  function isDateTimeValid(date) {
    const selectedDate = new Date(date);
    const selectedHour = selectedDate.getHours();
    return selectedHour >= 8 && selectedHour < 19;
  }
*/
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
        // svuotiamo il form resettando l'oggetto state
        // al suo valore iniziale!
      } else {
        // errore nei dati inviati? server in crash?
        alert("ERRORE!");
        console.log("errore nella chiamata :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [pre, setPre] = useState([]);
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
            <div>
              <label>
                Terapie:
                <input type="number" value={id} readOnly />
                {/* <input type="text" value={id} onChange={(e) => setId(e.target.value)} />*/}
              </label>
            </div>
            <div>
              <label>
                Terapie:
                <input type="text" value={nomeTerapia} onChange={(e) => setNomeTerapia(e.target.value)} />
              </label>
            </div>
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

            <div>
              <label>
                Sede:
                <input type="text" value={sede} onChange={(e) => setSede(e.target.value)} />
              </label>
            </div>
            <div>
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
            <div>
              <label>
                Email:
                <input type="email" value={emailUtente} onChange={(e) => setEmailUtente(e.target.value)} />
              </label>
            </div>
            <Button variant="primary" type="submit">
              PRENOTA!
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default Pren;
