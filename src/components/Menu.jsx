import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav style={{ display: "flex", gap: "15px" }}>
      <Link to="/">Home</Link>
      <Link to="/tarefas">Tarefas</Link>
      <Link to="/sobre">Sobre</Link>
    </nav>
  );
}