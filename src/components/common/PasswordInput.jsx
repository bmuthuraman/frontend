import { Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const PasswordInput = ({
    label = "Password",
    name = "password",
    value,
    placeholder = "Enter your Password",
    onChange,
}) => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="mb-3">

            <div className="d-flex justify-content-between align-items-center mb-2">

                <label
                    htmlFor={name}
                    className="form-label fw-semibold mb-0"
                >
                    {label}
                </label>

            </div>

            <div className="position-relative">

                <input
                    id={name}
                    name={name}
                    type={showPassword ? "text" : "password"}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className="form-control reen-input reen-password-input"
                />

                <Lock
                    size={20}
                    className="position-absolute top-50 end-0 translate-middle-y me-3 text-secondary"
                />

            </div>

        </div>
    );
};

export default PasswordInput;