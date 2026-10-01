import { useState } from "react";
import { LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../store/slices/authSlice";

const LogoutButton = ({
    className = "",
    showIcon = true,
}) => {
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove authentication data
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");

        // Clear Redux authentication state
        dispatch(logout());

        // Navigate to login
        navigate("/login", {
            replace: true,
        });
    };

    return (
        <>
            {/* Logout Button */}
            <button
                type="button"
                onClick={() => setShowModal(true)}
                className={`
                    btn
                    btn-sm
                    p-0
                    border-0
                    d-flex
                    align-items-center
                    gap-3
                    ${className}
                `}
            >
                {showIcon && (
                    <LogOut
                        size={22}
                        strokeWidth={1.8}
                    />
                )}

                <span>Logout</span>
            </button>


            {/* Logout Confirmation Modal */}
            {showModal && (
                <div
                    className="reen-logout-overlay"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="reen-logout-modal"
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                    >

                        <p className="reen-logout-message">
                            Are you sure you want to Logout?
                        </p>


                        <div className="row g-4">

                            {/* Cancel */}
                            <div className="col-12 col-sm-6">
                                <button
                                    type="button"
                                    className="btn reen-logout-cancel w-100"
                                    onClick={() =>
                                        setShowModal(false)
                                    }
                                >
                                    Cancel
                                </button>
                            </div>


                            {/* Logout */}
                            <div className="col-12 col-sm-6">
                                <button
                                    type="button"
                                    className="btn reen-logout-confirm w-100"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default LogoutButton;