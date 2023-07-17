import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomNav from "./components/CustomNav";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registrazione from "./components/Registrazione.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import ChiSiamo from "./components/ChiSiamo";
import Terapie from "./components/Terapie";
import Prenotazioni from "./components/Prenotazioni";

import DoveSiamo from "./components/DoveSiamo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="prenotazioni" element={<Prenotazioni />} />
          <Route path="/registrazione" element={<Registrazione />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
          <Route path="/terapie" element={<Terapie />} />
          <Route path="/dovesiamo" element={<DoveSiamo />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
