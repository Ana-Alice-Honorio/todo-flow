import React from "react";
import Tarefa from "../Task/Task.js";
import "./List.css";

function ListTask({ tarefas, onRemoveTask }) {
  return (
    <div className="list">
      {tarefas.map((tarefa, index) => (
        <Tarefa
          key={index}
          tarefa={tarefa}
          onRemover={() => onRemoveTask(index)}
        />
      ))}
    </div>
  );
}

export default ListTask;
