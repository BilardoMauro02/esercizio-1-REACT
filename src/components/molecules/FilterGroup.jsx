import Button from "../atoms/Button";

function FilterGroup(){

    return (
    <div className="filterGroup">
        <Button
            label="tutti"
        />
        <Button
            label="completati"
        />
        <Button
            label="attivi"
        />
    </div>
    )
}

export default FilterGroup;