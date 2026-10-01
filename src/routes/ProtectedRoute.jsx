import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { isTokenExpired } from "../utils/auth";

const ProtectedRoute = () => {

    const location = useLocation();

    const {
        isAuthenticated,
        token,
    } = useSelector(
        (state) => state.auth
    );

    const accessToken =
        token ||
        localStorage.getItem("accessToken");


    // No token
    if (!accessToken) {

        return (
            <Navigate
                to="/login"
                replace
                state={{
                    from: location,
                }}
            />
        );
    }


    // Token expired
    if (isTokenExpired()) {

        localStorage.removeItem(
            "accessToken"
        );

        localStorage.removeItem(
            "user"
        );

        return (
            <Navigate
                to="/login"
                replace
            />
        );
    }


    return <Outlet />;
};

export default ProtectedRoute;