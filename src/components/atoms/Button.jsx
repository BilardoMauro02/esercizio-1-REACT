function Button({ children, onClick, variant = "primary", type = "button" }) {
    return(
    <button type={type} onClick={onClick} variant={variant}>
        {children}
    </button>)
};

export default Button