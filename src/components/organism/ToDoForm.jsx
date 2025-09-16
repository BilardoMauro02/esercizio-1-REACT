import { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';



function ToDoForm() {
    const [toDo, setToDo] = useState('');
    const [items, setItems] = useState([]);

    function addItem(){
    if (toDo.trim() === '') return;
    
    const newItem = {
    id: Date.now(),
    text: toDo,
    completed: false,
    };

    setItems([...items, newItem]);
    setToDo('');
    }

    return (
        <div>
            <Input
            value={toDo}
            onChange={(e) => setToDo(e.target.value)}
            placeholder="Scrivi una nuova ToDo..."
            />
            <Button
            label="invia"
            onClick={addItem}
            />
        </div>
    );
    }

export default ToDoForm;