import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lidos from "./components/Lidos.js";
import Manna from "./components/Manna.js";
import Maggs from "./components/Maggs.js";
import Noches from "./components/Noches.js";
import Veggie from "./components/Veggie.js";
import Picco from "./components/Picco.js";
import Macs from "./components/Macs.js";
import Chit from "./components/Chit.js";
import Home from "./components/Home.js";

// the function below adds links to the pages for the corresponding restuarnats

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/lidos" element={<Lidos />} />
          <Route path="/manna" element={<Manna />} />
          <Route path="/maggs" element={<Maggs />} />
          <Route path="/noches" element={<Noches />} />
          <Route path="/veggie" element={<Veggie />} />
          <Route path="/picco" element={<Picco />} />
          <Route path="/macs" element={<Macs />} />
          <Route path="/chit" element={<Chit />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
