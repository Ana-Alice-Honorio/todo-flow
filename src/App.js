import "./App.css";

import React, { useState } from "react";
import FormTask from "./components/Form/Form.js";
import ListTask from "./components/List/List.js";
import Card from "./components/Card/Card.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  const [tarefas, setTarefas] = useState([]);

  const addTask = (tarefa) => {
    setTarefas([...tarefas, tarefa]);
  };

  const removeTask = (ind) => {
    setTarefas(tarefas.filter((_, i) => i !== ind));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo Flow</h1>
      </header>
      <div className="main-content">
        <Card>
          <FormTask onAddNewTask={addTask} />
        </Card>
        <Card>
          <ListTask tarefas={tarefas} onRemoveTask={removeTask} />
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default App;
