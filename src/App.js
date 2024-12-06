import "./App.css";
import KompletnaKrvnaSlika from "./components/KompletnaKrvnaSlika";
import Navbar from "./components/navbar";
import InterpretationPage from "./components/InterpretacijaRezultata";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Biohemija from "./components/Biohemija";
import Urin from "./components/Urin";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<InterpretationPage />} />
          <Route
            path="/kompletnakrvnaslika"
            element={<KompletnaKrvnaSlika />}
          />
          <Route path="/biohemija" element={<Biohemija />} />
          <Route path="/hemijskipregledurina" element={<Urin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
