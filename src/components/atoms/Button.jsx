import "./Button.css";

function Button({ children, onClick, variant = "primary", type = "button" }) {
    return(
    <button type={type} onClick={onClick} className= {`button ${variant}`}>
        {children}
    </button>)
};

export default Button