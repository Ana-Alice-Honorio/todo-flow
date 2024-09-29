import React from "react";
import "./Task.css";

function Tarefa({ tarefa, onRemove }) {
  return (
    <div className="task">
      <span> {tarefa}</span>
      <button onClick={onRemove}>Remover</button>
    </div>
  );
}

export default Tarefa;
