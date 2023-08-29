import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa";

function SectionCounter() {
  const [visite, setVisite] = useState(0);
  const [pazienti, setPazienti] = useState(0);
  const [medici, setMedici] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (visite >= 2000) {
        clearInterval(interval);
      } else {
        setVisite((prevCount) => prevCount + 6);
      }
    }, 1); // Aggiorna il contatore

    return () => {
      clearInterval(interval); // Pulisce l'intervallo quando il componente viene smontato
    };
  }, [visite]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pazienti >= 50000) {
        clearInterval(interval);
      } else {
        setPazienti((prevCount) => prevCount + 140);
      }
    }, 1.5); // Aggiorna il contatore

    return () => {
      clearInterval(interval); // Pulisce l'intervallo quando il componente viene smontato
    };
  }, [pazienti]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (medici >= 1000) {
        clearInterval(interval);
      } else {
        setMedici((prevCount) => prevCount + 4);
      }
    }, 3); // Aggiorna il contatore

    return () => {
      clearInterval(interval); // Pulisce l'intervallo quando il componente viene smontato
    };
  }, [medici]);

  return (
    <>
      <h4>I NOSTRI NUMERI</h4>
      <Col xs={12} className="d-flex justify-content-between mt-3 ">
        <div className="d-flex">
          <p>
            <AiFillMedicineBox style={{ fontSize: "40px" }} />
          </p>
          <div className="ms-2">
            <p className="pSectionCounter"> {visite}</p>
            <p> visite</p>
          </div>
        </div>

        <div className="d-flex">
          <p>
            <FaPeopleRoof style={{ fontSize: "40px" }} />
          </p>
          <div className="ms-2">
            <p className="pSectionCounter"> + {pazienti}</p>
            <p> pazienti</p>
          </div>
        </div>

        <div className="d-flex">
          <p>
            <FaHandHoldingMedical style={{ fontSize: "40px" }} />
          </p>
          <div className="ms-2">
            <p className="pSectionCounter"> {medici}</p>
            <p> medici</p>
          </div>
        </div>
      </Col>
    </>
  );
}

export default SectionCounter;
