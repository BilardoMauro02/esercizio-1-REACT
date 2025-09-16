import { useState } from 'react';
import './App.css'
import ToDoForm from './components/organism/ToDoForm'
import ToDoList from './components/organism/ToDoList'

let id= 1;

function App() {
   const [toDos, setToDo] = useState([]);

    function addTodo(testo){
      const toDo = {
        id: id++,
        testo,
        completed: false,
        createdAt: Date.now()
      }
      setToDo([toDo, ...toDos])
    }

  return (
    <>
    <ToDoForm onAdd={addTodo}/>
    <ToDoList toDo={toDos}/>
    </>
  )
}


export default App
