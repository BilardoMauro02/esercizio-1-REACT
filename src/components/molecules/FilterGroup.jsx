import Button from "../atoms/Button";

function FilterGroup(){

    return (
    <div>
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