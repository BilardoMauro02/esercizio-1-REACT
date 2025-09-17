import Button from "../atoms/Button";
import Input from "../atoms/Input";
function ToDoForm({onAdd}) {


    return (
        <>
            <Input />
            <Button onClick={onAdd}
            children="invia"/>
        </>
    );
}

export default ToDoForm;