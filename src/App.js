import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomNav from "./components/CustomNav";
import Footer from "./components/Footer";
import ChiSiamo from "./components/ChiSiamo";
import Map from "./components/Map.jsx";

function App() {
  return (
    <div className="App">
      <CustomNav />
      <ChiSiamo />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
