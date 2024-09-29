import React from "react";
import Tarefa from "../Task/Task.js";

function ListTask({ tarefas, onRemoveTask }) {
  return (
    <ul>
      {tarefas.map((tarefa, index) => (
        <Tarefa
          key={index}
          tarefa={tarefa}
          onRemover={() => onRemoveTask(index)}
        />
      ))}
    </ul>
  );
}

export default ListTask;
