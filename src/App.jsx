import React, { useState } from "react";
import ToDoForm from "./components/organism/ToDoForm";
import ToDoList from "./components/organism/ToDoList";

function App() {
  // 🎯 SINGLE SOURCE OF TRUTH: tutto lo stato centralizzato!
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [nextId, setNextId] = useState(1);

  // 📊 Tutti i dati derivati calcolati dallo stato centrale
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

  const activeCount = todos.filter((todo) => !todo.completed).length;

  // 🔄 Funzioni che modificano SOLO lo stato centrale


  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: nextId,
        text: text,
        completed: false,
      },
    ]);
    setNextId(nextId + 1);
  };


  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };


  return (
    <div>
      {/* 🎯 L'interfaccia si basa SOLO sullo stato centrale */}
      <h1>Todo App</h1>
      
      <div className="toDo-Form">
        <ToDoForm onAdd={addTodo}/>
      </div>

      <div className="toDo-List">
        <ToDoList></ToDoList>
      </div>


      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className={todo.completed ? "completed" : ""}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>

      <div>
        <span>{activeCount} attività rimanenti</span>
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          Tutte
        </button>
        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => setFilter("active")}
        >
          Attive
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completate
        </button>
      </div>
    </div>
  );
}

export default App;