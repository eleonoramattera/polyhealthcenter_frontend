import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import medici from "../../assets/img/mediciChiSiamo.jpg";
import salaoperatoria from "../../assets/img/salaoperatoria.jpg";
import mission from "../../assets/img/mission.jpg";
import ecografia from "../../assets/img/ecografia.jpg";
import "./ChiSiamo.css";
import SectionCounter from "../SectionCounter";

function ChiSiamo() {
  return (
    <>
      <Row>
        <Col>
          <SectionCounter />
        </Col>
      </Row>
      <Row className="justify-content-center mt-5 flex-wrap">
        <Col xs={6} className="pt-4" style={{ textAlign: "justify" }}>
          <p>
            PolyHealth è un'eccellenza nel panorama ospedaliero italiano e internazionale, grazie alla sua costante
            ricerca di innovazione e all'adozione delle più avanzate tecnologie mediche. L'ospedale si distingue per
            l'ampia gamma di servizi di alta qualità offerti ai pazienti e per l'approccio orientato alla sostenibilità
            economica, allo sviluppo e alla responsabilità sociale. <br /> <br />
            Uno dei punti di forza di PolyHealth è l'impiego di acceleratori lineari di ultima generazione per la
            Radioterapia, un elemento cruciale nella cura dei tumori. Questi dispositivi consentono un trattamento
            altamente preciso e mirato, riducendo al minimo l'impatto sui tessuti sani circostanti, migliorando così
            notevolmente la qualità di vita dei pazienti. L'utilizzo di robot in sala operatoria per procedure
            chirurgiche meno invasive è un altro aspetto distintivo di PolyHealth. Questa tecnologia consente ai
            chirurghi di eseguire interventi complessi con precisione millimetrica e minimizzando il trauma per il
            paziente, accelerando il recupero e riducendo il rischio di complicazioni.
          </p>
        </Col>
        <Col className="pb-4">
          <img src={medici} alt="medici" style={{ width: "100%" }} />
        </Col>
      </Row>

      <Row>
        <Col xs={6} className="pt-4">
          <img src={salaoperatoria} alt="sala operatoria" style={{ width: "100%" }} />
        </Col>
        <Col xs={6} className="pt-2" style={{ textAlign: "justify" }}>
          <p>
            Nell'ambito dell'Oculistica, PolyHealth è all'avanguardia nell'impiego di laser di ultima generazione per
            trattare una vasta gamma di patologie oculari, garantendo risultati più precisi e meno invasivi. In
            Radiologia, l'ospedale si distingue per l'utilizzo di sistemi avanzati di riduzione dei raggi, contribuendo
            a preservare la salute dei pazienti e del personale medico. La presenza di 3 Tac nelle sale operatorie
            utilizzate durante gli interventi di Neurochirurgia dimostra l'attenzione di PolyHealth alla sicurezza e
            all'efficacia delle procedure neurochirurgiche complesse. L'ospedale è anche noto per il suo impegno nella
            qualità clinica, essendo il primo policlinico italiano ad essere certificato per la qualità da Joint
            Commission International. Questa certificazione è una testimonianza del rigoroso controllo di qualità e
            delle migliori pratiche mediche adottate da PolyHealth. <br /> <br />
            Infine, il riconoscimento da parte di Harvard University come uno dei 4 ospedali più innovativi al mondo
            sottolinea l'importanza del modello organizzativo di PolyHealth, che fonde efficienza operativa con un forte
            impegno verso la sostenibilità economica e la responsabilità sociale. PolyHealth è un esempio concreto di
            come la tecnologia e l'innovazione possano migliorare la vita delle persone e il settore sanitario.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={6} style={{ textAlign: "justify" }}>
          <h3>LA NOSTRA MISSION</h3>
          <p>
            La missione di migliorare la vita dei nostri pazienti è al centro della nostra filosofia. Ci impegniamo
            costantemente a fornire cure sempre più efficaci, investendo in ricerca e sviluppando un'organizzazione
            innovativa e sostenibile. La ricerca occupa un ruolo fondamentale nella nostra missione. Non ci limitiamo a
            fornire cure mediche di alta qualità, ma cerchiamo anche di contribuire concretamente al progresso della
            medicina. Supportiamo progetti di ricerca innovativi che mirano a scoprire nuovi trattamenti, terapie e
            metodologie diagnostiche. Il nostro obiettivo è tradurre la ricerca scientifica in soluzioni pratiche per i
            pazienti, migliorando le loro prospettive di guarigione e benessere.
          </p>
          <img src={mission} alt="mission" style={{ width: "100%" }} />
        </Col>
        <Col xs={6} className="mt-4">
          <img src={ecografia} alt="ecografia" style={{ width: "100%" }} />
        </Col>
        <Col xs={6} style={{ textAlign: "justify" }} className="mt-3">
          Inoltre, ci dedichiamo alla formazione di una nuova generazione di professionisti della salute. Riconosciamo
          che il futuro della medicina richiede un approccio interdisciplinare e integrato che unisca la clinica, la
          ricerca e l'università. Pertanto, sviluppiamo un modello educativo che incoraggia la collaborazione tra queste
          tre dimensioni. I nostri studenti non solo acquisiscono conoscenze teoriche, ma hanno anche l'opportunità di
          mettere in pratica ciò che imparano nella clinica e di partecipare attivamente alla ricerca.
        </Col>
        <Col xs={6} style={{ textAlign: "justify" }} className="mt-3">
          In questo modo, ci impegniamo a perseguire la nostra missione di migliorare la vita dei pazienti, contribuendo
          al progresso della medicina e formando una nuova generazione di professionisti preparati a affrontare le sfide
          mediche del futuro. La nostra visione è quella di un sistema sanitario efficace in grado di offrire soluzioni
          innovative per migliorare la salute e il benessere delle persone. Siamo convinti che solo attraverso un
          impegno costante nell'innovazione e nella ricerca e possiamo realizzare un sistema sanitario all'avanguardia.
        </Col>
      </Row>
      <Row style={{ textAlign: "justify" }}>
        <Col xs={12}>
          <h3 className="mt-5 mb-3">I NOSTRI VALORI</h3>
        </Col>
        <Col xs={6}>
          <h5>Collaborazione </h5>
          <p>
            La collaborazione è il pilastro su cui si basa il nostro approccio alla cura dei pazienti e allo sviluppo
            professionale all'interno della nostra comunità di professionisti. Favoriamo un ambiente in cui ogni membro
            del nostro team si senta valorizzato e rispettato per le sue competenze e prospettive uniche. Incentiviamo
            il libero scambio di idee e conoscenze tra medici, infermieri, ricercatori e altri professionisti della
            salute. Riconosciamo che le sfide mediche complesse richiedono una visione multidisciplinare e che il lavoro
            di squadra è fondamentale per trovare soluzioni efficaci. Nel promuovere la collaborazione, incoraggiamo
            anche la crescita professionale di ciascun membro del nostro team. Offriamo opportunità di formazione e
            sviluppo, incoraggiamo la partecipazione a conferenze e workshop, e sosteniamo l'accesso a risorse avanzate
            per rimanere all'avanguardia nelle conoscenze e nelle competenze.
          </p>
          <h5>Crescita Continua </h5>
          <p>
            La nostra dedizione alla crescita continua è evidente in ogni aspetto del nostro operato. Riconosciamo che
            il campo della medicina è in continua evoluzione, con nuovi trattamenti, tecnologie e scoperte che emergono
            costantemente. Pertanto, incoraggiamo attivamente la formazione continua del nostro personale, la
            partecipazione a conferenze e la collaborazione con istituti di ricerca di rilievo. Inoltre, promuoviamo una
            cultura in cui il processo di apprendimento è incoraggiato e rispettato. Crediamo che il desiderio di
            miglioramento sia alla base della nostra capacità di fornire cure sempre più efficaci ai nostri pazienti. La
            crescita professionale e personale dei nostri membri del team è fondamentale per il nostro successo nel
            perseguire la nostra missione di migliorare la vita dei pazienti. La ricerca, l'innovazione e l'adozione di
            modelli organizzativi avanzati sono pilastri fondamentali della nostra strategia per rimanere
            all'avanguardia nel settore della medicina e garantire il massimo livello di assistenza ai pazienti. La
            crescita continua è ciò che ci guida nell'offrire soluzioni sempre più efficaci e avanzate per migliorare la
            salute e il benessere delle persone.
          </p>
        </Col>
        <Col xs={6} className="mt-4">
          <h5>Responsabilità Sociale </h5>
          <p>
            La nostra responsabilità sociale è una parte intrinseca della nostra missione e del nostro impegno verso la
            comunità in cui operiamo. Riconosciamo che il nostro impatto va oltre la cura dei pazienti e ci impegniamo a
            essere agenti positivi di cambiamento sociale. Promuoviamo attivamente iniziative sociali che riflettono i
            nostri valori e che contribuiscono al benessere generale della società. Queste iniziative possono includere
            programmi di assistenza medica a individui o comunità svantaggiate, campagne di sensibilizzazione su
            questioni di salute pubblica, progetti di educazione sanitaria nelle scuole o nella comunità, e
            collaborazioni con organizzazioni no-profit per affrontare le sfide mediche emergenti. Inoltre, cerchiamo di
            essere un modello positivo di cittadinanza responsabile. Ci impegniamo a ridurre l'impatto ambientale delle
            nostre attività, come discusso precedentemente, ma anche a promuovere la diversità e l'inclusione
            all'interno della nostra organizzazione e a sostenere l'etica e la trasparenza nelle nostre pratiche
            aziendali. La nostra responsabilità sociale non è un obbligo, ma una scelta consapevole di contribuire al
            progresso generale della società e di fare la differenza nella vita delle persone al di là delle cure
            mediche. Siamo orgogliosi di essere parte attiva nella costruzione di una comunità più sana, equa e
            solidale.
          </p>
          <h5>Sostenibilità Ambientale</h5>
          <p>
            La sostenibilità ambientale è profondamente intrecciata nei nostri valori fondamentali. Comprendiamo la
            necessità cruciale di proteggere il nostro ambiente per le generazioni future e abbiamo quindi adottato un
            approccio impegnativo verso la responsabilità ecologica. In tutti gli aspetti delle nostre attività cliniche
            e ospedaliere, ci impegniamo a ridurre l'impatto ambientale. Nelle nostre strutture, investiamo in
            tecnologie all'avanguardia per ridurre il consumo energetico e promuovere l'efficienza energetica. Ci
            sforziamo di utilizzare fonti di energia rinnovabile quando possibile e di adottare sistemi di illuminazione
            a basso consumo energetico.
          </p>
        </Col>

        <Col xs={6}></Col>
      </Row>
    </>
  );
}

export default ChiSiamo;
