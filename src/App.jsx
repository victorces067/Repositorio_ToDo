import "./index.css"; 

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Home from "./pages/Home";
import Tarefas from "./pages/Tarefas";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarefas" element={<Tarefas />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;