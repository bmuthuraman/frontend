import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../store/slices/authSlice";

const LogoutModal = ({
    show,
    onClose,
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!show) {
        return null;
    }

    const handleLogout = () => {
        // Clear authentication data
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");

        // Clear Redux state
        dispatch(logout());

        // Go to login
        navigate("/login", {
            replace: true,
        });
    };

    return (
        <div
            className="reen-logout-overlay"
            onClick={onClose}
        >
            <div
                className="reen-logout-modal"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Message */}
                <p className="reen-logout-message">
                    Are you sure you want to Logout?
                </p>

                {/* Buttons */}
                <div className="row g-4">

                    <div className="col-12 col-sm-6">
                        <button
                            type="button"
                            className="btn reen-logout-cancel w-100"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>

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
    );
};

export default LogoutModal;