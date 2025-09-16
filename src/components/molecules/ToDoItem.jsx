import Button from "../atoms/Button";
import Checkbox from "../atoms/Checkbox";

function ToDoItem({ value, onChange, onRemove, checked }){

    const { id, text: valueText, completed, createdAt } = value;

    return (
        <div className="toDo-Item">
        <div>
            <div className={`todo-text ${completed ? 'todo-text--completed' : ''}`}>{valueText}</div>
            <div className="todo-created">Creato il {String(createdAt).replace(',', ' alle')}</div>
        </div>

        <Checkbox
            checked={checked}
            onChange={() => onChange(id)}
            label="completato"
        />
        <Button
            label="Rimuovi"
            onClick={onRemove}
        />
        <Button
            label="Modifica"
            onClick={onChange}
        />

        </div>
    );
};

export default ToDoItem;
