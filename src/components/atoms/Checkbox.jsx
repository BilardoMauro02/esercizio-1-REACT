function Checkbox({ checked, onChange}){
    return(
    <label>
        <input
        type="checkbox"
        checked={checked} 
        onChange={(e) => onChange(e.target.value)}/>
    </label>
    )
};

export default Checkbox;