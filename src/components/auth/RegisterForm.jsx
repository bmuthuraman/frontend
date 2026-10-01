import { useState } from "react";
import {
    User,
    Mail,
    Phone,
} from "lucide-react";

import FormInput from "../common/FormInput";
import PrimaryButton from "../common/PrimaryButton";

const RegisterForm = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        dateOfBirth: "",
        status: "",
    });

    const handleChange = (event) => {

        const {
            name,
            value,
        } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {

        event.preventDefault();

        console.log("Register Request:", formData);

        // Redux Saga will be connected here
    };

    return (
        <div className="reen-auth-card">

            {/* Title */}
            <h2 className="reen-auth-title-sm fw-bold mb-5">
                Register
            </h2>

            <form onSubmit={handleSubmit}>

                <div className="row">

                    {/* First Name */}
                    <div className="col-12 col-md-6">
                        <FormInput
                            label="First Name"
                            name="firstName"
                            value={formData.firstName}
                            placeholder="Enter first name"
                            onChange={handleChange}
                            icon={User}
                        />
                    </div>

                    {/* Last Name */}
                    <div className="col-12 col-md-6">
                        <FormInput
                            label="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            placeholder="Enter last name"
                            onChange={handleChange}
                            icon={User}
                        />
                    </div>

                    {/* Email */}
                    <div className="col-12">
                        <FormInput
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            placeholder="Enter your Email"
                            onChange={handleChange}
                            icon={Mail}
                        />
                    </div>

                    {/* Mobile Number */}
                    <div className="col-12 col-md-6">
                        <FormInput
                            label="Mobile Number"
                            name="mobileNumber"
                            type="tel"
                            value={formData.mobileNumber}
                            placeholder="Enter mobile number"
                            onChange={handleChange}
                            icon={Phone}
                        />
                    </div>

                    {/* Date of Birth */}
                    <div className="col-12 col-md-6">

                        <div className="mb-4">

                            <label
                                htmlFor="dateOfBirth"
                                className="form-label reen-register-label"
                            >
                                Date of Birth
                            </label>

                            <input
                                id="dateOfBirth"
                                name="dateOfBirth"
                                type="date"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                                className="form-control reen-input"
                            />

                        </div>

                    </div>

                    {/* Status */}
                    <div className="col-12">

                        <div className="mb-4">

                            <label
                                htmlFor="status"
                                className="form-label reen-register-label"
                            >
                                Status
                            </label>

                            <select
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="form-select reen-input"
                            >
                                <option value="">
                                    Select status
                                </option>

                                <option value="Active">
                                    Active
                                </option>

                                <option value="Inactive">
                                    Inactive
                                </option>

                                <option value="Pending">
                                    Pending
                                </option>
                            </select>

                        </div>

                    </div>

                </div>


                {/* Register */}
                <PrimaryButton type="submit">
                    Register
                </PrimaryButton>


                {/* Login */}
                <div className="mt-4">

                    <span className="text-secondary">
                        Already have an Account?
                    </span>

                    <a
                        href="/login"
                        className="reen-register-link ms-2"
                    >
                        Log in
                    </a>

                </div>

            </form>

        </div>
    );
};

export default RegisterForm;