import { useEffect, useState } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { useNavigate, Link, } from "react-router-dom";
import { loginRequest, } from "../../store/slices/authSlice";
import { User } from "lucide-react";

import FormInput from "../common/FormInput";
import PasswordInput from "../common/PasswordInput";
import PrimaryButton from "../common/PrimaryButton";


const LoginForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const {
        loading,
        error,
        isAuthenticated,
    } = useSelector(
        (state) => state.auth
    );


    const [formData, setFormData] =
        useState({
            username: "",
            password: "",
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


        if (
            !formData.username.trim() ||
            !formData.password
        ) {
            return;
        }


        dispatch(
            loginRequest({
                username:
                    formData.username.trim(),

                password:
                    formData.password,
            })
        );
    };


    useEffect(() => {

        if (isAuthenticated) {

            navigate(
                "/dashboard",
                {
                    replace: true,
                }
            );
        }

    }, [
        isAuthenticated,
        navigate,
    ]);


    return (

        <div className="reen-auth-card">

            <h2 className="reen-auth-title-sm fw-bold mb-5">
                Login
            </h2>


            <form
                onSubmit={handleSubmit}
            >

                <FormInput
                    label="Username"
                    name="username"
                    value={formData.username}
                    placeholder="Enter your username"
                    onChange={handleChange}
                    icon={User}
                />


                <PasswordInput
                    label="Password"
                    name="password"
                    value={formData.password}
                    placeholder="Enter your Password"
                    onChange={handleChange}
                />


                {error && (

                    <div
                        className="alert alert-danger py-2"
                        role="alert"
                    >
                        {error}
                    </div>

                )}


                <PrimaryButton
                    type="submit"
                    disabled={loading}
                >

                    {loading
                        ? "Logging in..."
                        : "Login"}

                </PrimaryButton>


                <div className="mt-4">

                    <span className="text-secondary">
                        Don’t Have an Account?
                    </span>


                    <Link
                        to="/register"
                        className="reen-register-link ms-2"
                    >
                        Register
                    </Link>

                </div>

            </form>

        </div>
    );
};


export default LoginForm;