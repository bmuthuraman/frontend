import { Mail, User, Phone } from "lucide-react";

const FormInput = ({
    label,
    name,
    type = "text",
    value,
    placeholder,
    onChange,
    icon: Icon,
}) => {
    return (
        <div className="mb-3">

            <label
                htmlFor={name}
                className="form-label reen-register-label"
            >
                {label}
            </label>

            <div className="position-relative">

                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className="form-control reen-input"
                />

                {Icon && (
                    <Icon
                        size={21}
                        className="position-absolute top-50 end-0 translate-middle-y me-3 text-secondary"
                    />
                )}

            </div>

        </div>
    );
};

export default FormInput;