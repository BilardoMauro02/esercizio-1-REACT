import Button from "../atoms/Button";
import Checkbox from "../atoms/Checkbox";

const ToDoItem = ({ value, onChange, onRemove, checked }) => {

  return (
    <div className="toDoItem">
        
        <h3>{value}</h3>
      <Checkbox
        checked={checked}
        onChange={onChange}
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
