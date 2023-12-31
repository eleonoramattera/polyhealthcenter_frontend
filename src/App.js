import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNav from "./components/CustomNav/CustomNav";
import Footer from "./components/Footer/Footer";

import Login from "./components/Login.jsx";
import Logout from "./components/Logout";
import Home from "./components/Home/Home.jsx";
import ChiSiamo from "./components/ChiSiamo/ChiSiamo.jsx";

import TerapiaStore from "./components/TerapiaStore";
import DoveSiamo from "./components/DoveSiamo";
import PrenotazioniList from "./components/PrenotazioniList";
import Registrazione from "./components/Registrazione";

import Pren from "./components/Pren";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNav />
        <Routes>
          <Route path="/registrazione" element={<Registrazione />} />
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="prenotazioni" element={<Pren />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
          <Route path="/terapiastore" element={<TerapiaStore />} />
          <Route path="/dovesiamo" element={<DoveSiamo />} />
          <Route path="/prenotazionilist" element={<PrenotazioniList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
