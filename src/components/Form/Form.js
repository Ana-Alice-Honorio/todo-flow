import React, { useState } from "react";

function FormTask({ onAddNewTask }) {
  const [newTask, setNovaTarefa] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") {
      alert("Por favor, insira uma tarefa!");
      return;
    }
    onAddNewTask(newTask);
    setNovaTarefa("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask }
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
}

export default FormTask;
