import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

function Prenotazioni() {
  const [terapie, setTerapie] = useState([]); // Stato per salvare i dati delle terapie
  const [selectedTerapia, setSelectedTerapia] = useState(null); // Stato per salvare la terapia selezionata
  const [descrizioneTerapia, setDescrizioneTerapia] = useState("");
  const [prezzoTerapia, setPrezzoTerapia] = useState("");

  const handleSelectTerapia = (e) => {
    const selectedTerapiaId = parseInt(e.target.value);
    const selectedTerapia = terapie.find((terapia) => terapia.id === selectedTerapiaId);

    setSelectedTerapia(selectedTerapia);
    setDescrizioneTerapia(selectedTerapia ? selectedTerapia.descrizione : "");
    setPrezzoTerapia(selectedTerapia ? selectedTerapia.prezzo : "");
  };

  const handleSelectTerapiaset = (e) => {
    setSelectedTerapia(e.target.value); // Aggiorna lo stato con la terapia selezionata
  };
  ///////////
  const [data, setData] = useState([]);
  const [selectedComune, setSelectedComune] = useState("");
  const [regioneSede, setRegioneSede] = useState("");
  const [latitudineSede, setLatitudineSede] = useState("");
  const [longitudineSede, setLongitudineSede] = useState("");

  const handleSelectComune = (e) => {
    const selectedComuneValue = e.target.value;
    const selectedSede = data.find((sede) => sede.comune === selectedComuneValue);

    setSelectedComune(selectedComuneValue);
    setRegioneSede(selectedSede ? selectedSede.regione : "");
    setLatitudineSede(selectedSede ? selectedSede.lat : "");
    setLongitudineSede(selectedSede ? selectedSede.lon : "");
  };
  // const [id, setId] = useState("");

  const [dataPrenotazione, setDataPrenotazione] = useState("");
  const [utente, setUtente] = useState({
    nome: " ",
    cognome: "",
    numeroTelefono: " ",
    email: " ",
    password: "",
  });

  ///////////////////////////////////////////////////////////
  //FETCH TERAPIE

  const getAllTerapie = async () => {
    try {
      let resp = await fetch("http://localhost:8080/api/terapie");
      if (resp.ok) {
        let data = await resp.json();
        setTerapie(data);
        console.log("TERAPIEE", data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //FETCH COMUNI

  const getAllSedi = async () => {
    try {
      let resp = await fetch("http://localhost:8080/api/sedi");
      if (resp.ok) {
        let data = await resp.json();
        setData(data);
        console.log("SEDII", data);
      } else {
        console.log("error");
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
    getAllTerapie();
    getAllSedi();
    getAllPren();
  }, []);

  ///////////////////////////////

  // Costruisci l'oggetto da inviare al server
  const prenotazione = {
    terapie,
    data,
    dataPrenotazione,
    utente,
    //  id,
  };

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

      if (response.ok) {
        alert("PRENOTAZIONE SALVATA CORRETTAMENTE!");
        <Navigate to="/lemieprenotazioni" />;
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

  const handleDataPrenotazioneChange = (e) => {
    setDataPrenotazione(e.target.value);
  };
  const handleUtenteChange = (e) => {
    setUtente({ ...utente, [e.target.name]: e.target.value });
  };

  /* const handleIdChange = (e) => {
    setId(e.target.value);
  };*/
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
            {/*    <div>
              <label>
                ID:
                <input type="text" value={id} onChange={handleIdChange} />
              </label>
          </div>*/}
            <h2>Terapia</h2>
            <label>
              Nome Terapia:
              <select value={selectedTerapia} onChange={(handleSelectTerapia, handleSelectTerapiaset)}>
                <option value="">Seleziona una terapia</option>
                {terapie.map((terapia) => (
                  <option key={terapia.id} value={terapia.id}>
                    {terapia.nome}
                  </option>
                ))}
              </select>
            </label>

            <div>
              <label>
                Descrizione Terapia:
                <input
                  type="text"
                  value={descrizioneTerapia}
                  onChange={(e) => setDescrizioneTerapia(e.target.value)}
                  readOnly
                />
              </label>
            </div>

            <label>
              Prezzo Terapia:
              <input type="text" value={prezzoTerapia} onChange={(e) => setPrezzoTerapia(e.target.value)} readOnly />
            </label>

            <div>
              <h2>SEDE</h2>
              <label>
                Comune Sede:
                <select value={selectedComune} onChange={handleSelectComune}>
                  <option value="">Seleziona un comune</option>
                  {data.map((sede) => (
                    <option key={sede.id} value={sede.comune}>
                      {sede.comune}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <label>
                Regione Sede:
                <input type="text" value={regioneSede} readOnly />
              </label>
            </div>
            <div>
              <label>
                Latitudine:
                <input type="text" value={latitudineSede} readOnly />
              </label>
            </div>
            <div>
              <label>
                Longitudine:
                <input type="text" value={longitudineSede} readOnly />
              </label>
            </div>

            <h2>Utente</h2>
            <label>
              Nome:
              <input type="text" name="nome" value={utente.nome} onChange={handleUtenteChange} />
            </label>
            <br />
            <label>
              Cognome:
              <input type="text" name="cognome" value={utente.cognome} onChange={handleUtenteChange} />
            </label>
            <br />
            <label>
              Numero di Telefono:
              <input type="text" name="numeroTelefono" value={utente.numeroTelefono} onChange={handleUtenteChange} />
            </label>
            <br />
            <label>
              Email:
              <input type="email" name="email" value={utente.email} onChange={handleUtenteChange} />
            </label>
            <br />
            <label>
              Password:
              <input type="password" name="password" value={utente.password} onChange={handleUtenteChange} />
            </label>
            <div>
              <label>
                Data Prenotazione:
                <input type="date" value={dataPrenotazione} onChange={handleDataPrenotazioneChange} />
              </label>
            </div>
            <Button variant="primary" type="submit">
              PRENOTA!
            </Button>
          </Form>
          {/*        <Form
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
                value={prenotazione.utente.nome}
                onChange={(e) => {
                  setUtente.nome({
                    ...utente,
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
                value={prenotazione.utente.cognome}
                onChange={(e) => {
                  setUtente.cognome({
                    ...utente,
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
                value={prenotazione.utente.email}
                onChange={(e) => {
                  setUtente.email({
                    ...utente,
                    email: e.target.value,
                  });
                }}
              />
            </Form.Group>

            <h2>Terapia</h2>
      <label>
        Nome Terapia:
        <input type="text" name="nome" value={terapia.nome} onChange={handleTerapiaChange} />
      </label>
            <Form.Group className="mb-3">
              <Form.Label>Inserisci Terapia</Form.Label>
              <Form.Select
                required
                value={prenotazione.terapia.nome}
                onChange={(e) => {
                  setTerapia.nome({
                    ...terapia,
                    nome: e.target.value,
                  });
                }}>
                <option>seleziona una terapia</option>
                {terapie?.map((t, index) => (
                  <option key={index}>
                    {t.id}|| {t.nome}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Inserisci Città</Form.Label>
              <Form.Select
                required
                value={prenotazione.sede.comune}
                onChange={(e) => {
                  setSede({
                    ...sede,
                    comune: e.target.value,
                  });
                }}>
                <option>seleziona una terapia</option>
                {comuni?.map((c, index) => (
                  <option key={index}>
                    {c.id} ||
                    {c.comune}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Data </Form.Label>
              <Form.Control
                type="date"
                required
                value={dataPrenotazione}
                onChange={(e) => setDataPrenotazione(e.target.value)}
                min={currentDate}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              PRENOTA!
            </Button>
                </Form>*/}
        </Col>
      </Row>
    </Container>
  );
}
export default Prenotazioni;
