import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { MdDelete, MdEdit } from "react-icons/md";

const LeMiePrenotazioni = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  const [pren, setPre] = useState([]);
  const [editingPrenotazione, setEditingPrenotazione] = useState(null);

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

  const updatePrenotazione = async (id, updatedPrenotazione) => {
    try {
      const response = await fetch(`http://localhost:8080/api/prenotazioni/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedPrenotazione),
      });

      if (response.ok) {
        const updatedPrenotazioni = pren.filter((prenotazione) =>
          prenotazione.id === id ? updatedPrenotazione : prenotazione
        );
        setPre(updatedPrenotazioni);
        setEditingPrenotazione(null);
        console.log("Prenotazione aggiornata con successo");
      } else {
        console.log("Si è verificato un errore nella richiesta");
        alert("Qualcosa è andato storto durante l'aggiornamento della prenotazione");
      }
    } catch (error) {
      console.log("Si è verificato un errore generico", error);
      alert("Si è verificato un errore durante l'aggiornamento della prenotazione");
    }
  };

  const removeItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/prenotazioni/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const updatedPrenotazioni = pren.filter((prenotazione) => prenotazione.id !== id);
        setPre(updatedPrenotazioni);
        console.log("Elemento rimosso con successo");
      } else {
        console.log("Si è verificato un errore nella richiesta");
        alert("Qualcosa è andato storto durante l'eliminazione della prenotazione");
      }
    } catch (error) {
      console.log("Si è verificato un errore generico", error);
      alert("Si è verificato un errore durante l'eliminazione della prenotazione");
    }
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

  // Funzione per impostare la modalità di modifica di una prenotazione
  const startEditing = (id) => {
    const prenotazioneDaModificare = prenotazioniFiltrate.find((prenotazione) => prenotazione.id === id);
    setEditingPrenotazione(prenotazioneDaModificare);
  };

  // Funzione per annullare la modalità di modifica
  const cancelEditing = () => {
    setEditingPrenotazione(null);
  };

  // Funzione per gestire la modifica di una prenotazione

  const handleEdit = (e) => {
    e.preventDefault();
    // ... Ottieni i nuovi valori dell'input e crea l'oggetto updatedPrenotazione con i nuovi dati ...
    updatePrenotazione(editingPrenotazione.id, editingPrenotazione);
  };

  /////////////////////////////////MODALE
  const [showModal, setShowModal] = useState(false);

  // Funzione per aprire il modal
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Funzione per chiudere il modal
  const handleCloseModal = () => {
    setShowModal(false);
    setEditingPrenotazione(null);
  };

  // Funzione per salvare la prenotazione modificata e chiudere il modal
  const handleSaveModal = (updatedPrenotazione) => {
    updatePrenotazione(editingPrenotazione.id, updatedPrenotazione);
    setShowModal(false);
  };
  return (
    <div>
      <h2>Inserisci la tua email per vedere le pre:</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={emailFiltrata} onChange={handleEmailChange} />
        <button type="submit">Visualizza Prenotazioni</button>
      </form>
      {prenotazioniFiltrate.length > 0 ? (
        <div>
          <h3>Prenotazioni per l'email: {emailFiltrata}</h3>
          <ul>
            {prenotazioniFiltrate.map((prenotazione) => (
              <li key={prenotazione.id}>
                {prenotazione.nomeTerapia} - {prenotazione.sede} {prenotazione.dataPrenotazione} -{" "}
                {prenotazione.emailUtente}
                {editingPrenotazione && editingPrenotazione.id === prenotazione.id ? (
                  // Form per la modifica della prenotazione
                  <form onSubmit={handleEdit}>
                    {/* ... Input con i valori correnti per la modifica della prenotazione ... */}
                    <button type="submit">Salva</button>
                    <button onClick={cancelEditing}>Annulla</button>
                  </form>
                ) : (
                  // Visualizzazione normale della prenotazione
                  <>
                    <button onClick={() => removeItem(prenotazione.id)}>❌ Elimina</button>
                    <button onClick={() => startEditing(prenotazione.id)}>✏️ Modifica</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Nessuna prenotazione trovata per l'email specificata</p>
      )}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Prenotazione</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form per la modifica della prenotazione */}
          <form onSubmit={(e) => e.preventDefault()}>
            {/* ... Input con i valori correnti per la modifica della prenotazione ... */}
            {/* Ad esempio, se hai un campo 'nomeTerapia': */}
            <label>Nome Terapia:</label>
            <input
              type="text"
              value={editingPrenotazione?.nomeTerapia || ""}
              onChange={(e) =>
                setEditingPrenotazione({
                  ...editingPrenotazione,
                  nomeTerapia: e.target.value,
                })
              }
            />
            {/* ... Altri campi della prenotazione ... */}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Annulla
          </Button>
          <Button variant="primary" onClick={() => handleSaveModal(editingPrenotazione)}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LeMiePrenotazioni;
