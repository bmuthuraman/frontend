const PrimaryButton = ({
    children,
    type = "button",
    onClick,
    disabled = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className="btn reen-auth-button w-100 fw-semibold"
        >
            {children}
        </button>
    );
};

export default PrimaryButton;