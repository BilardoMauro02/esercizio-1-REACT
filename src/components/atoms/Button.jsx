function Button({ label, onClick, variant, type = "button" }) {

    <button type={type} onClick={onClick} variant={variant}>
        {label}
    </button>
};

export default Button