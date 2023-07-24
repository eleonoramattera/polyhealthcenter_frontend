import Terapia from "./Terapia";

const TerapiaList = ({ terapie, changeTerapia, terapiaSelected }) => (
  <div className="mb-3">
    {terapie.map((terapia) => (
      <Terapia key={terapia.id} terapia={terapia} changeTerapia={changeTerapia} terapiaSelected={terapiaSelected} />
    ))}
  </div>
);

export default TerapiaList;
