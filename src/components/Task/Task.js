import React from "react";

function Tarefa({ tarefa, onRemover }) {
  return (
    <li>
      {tarefa}
      <button onClick={onRemover}>Remover</button>
    </li>
  );
}

export default Tarefa;
