import ToDoItem from "../molecules/ToDoItem";
import FilterGroup from "../molecules/FilterGroup";

function ToDoList(){
    

    return (
    <div className="main">
        <FilterGroup/>
        <ToDoItem/>
    </div>
    )
}

export default ToDoList;