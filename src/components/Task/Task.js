import React from "react";
import "./Task.css";

function Tarefa({ tarefa, onRemover }) {
  return (
    <div className="task">
      <span> {tarefa}</span>
      <button onClick={onRemover}>Remover</button>
    </div>
  );
}

export default Tarefa;
