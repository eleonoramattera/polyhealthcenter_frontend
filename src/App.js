import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomNav from "./components/CustomNav";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registrazione from "./components/Registrazione.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import ChiSiamo from "./components/ChiSiamo";

import Prenotazioni from "./components/Prenotazioni";
import TerapiaStore from "./components/TerapiaStore";
import DoveSiamo from "./components/DoveSiamo";

import RegisterPage from "./components/RegisterPage";
import LeMiePrenotazioni from "./components/LeMiePrenotazioni";
import Pren from "./components/Pren";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="prenotazioni" element={<Pren />} />
          <Route path="/registerpage" element={<RegisterPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
          <Route path="/terapiastore" element={<TerapiaStore />} />
          <Route path="/dovesiamo" element={<DoveSiamo />} />
          <Route path="/lemieprenotazioni" element={<LeMiePrenotazioni />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
