import React from "react";
import logo from "../../assets/images/logo.png";

export default function Logo() {
    return (
        <div className="d-flex logo-wrapper">
            <a href="/" className="logo">
                <img src={logo} alt="Reen Bank Logo" />
            </a>
        </div>
    );
}
