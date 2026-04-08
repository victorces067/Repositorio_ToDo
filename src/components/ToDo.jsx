import { useState } from "react";

export default function ToDo() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  function adicionar() {
    if (!input.trim()) return;

    setTarefas([...tarefas, { texto: input, feita: false }]);
    setInput("");
  }

  function remover(index) {
    setTarefas(tarefas.filter((_, i) => i !== index));
  }

  function toggle(index) {
    const lista = [...tarefas];
    lista[index].feita = !lista[index].feita;
    setTarefas(lista);
  }

  return (
    <div>
      <h2>ToDo List</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button onClick={adicionar}>Adicionar</button>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            <span
              onClick={() => toggle(index)}
              style={{
                textDecoration: tarefa.feita ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {tarefa.texto}
            </span>

            <button onClick={() => remover(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}