import { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

function ToDoForm() {

    const [toDo, setToDo] = useState('');

    function invia({onAdd}){
        onAdd(toDo.trim());
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
            onClick={invia}
            />
        </div>
    );
    }

export default ToDoForm;