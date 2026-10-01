import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = () => {
    const { isAuthenticated, token } = useSelector(
        (state) => state.auth
    );

    const accessToken =
        token || localStorage.getItem("accessToken");

    if (isAuthenticated || accessToken) {
        return (
            <Navigate
                to="/dashboard"
                replace
            />
        );
    }

    return <Outlet />;
};

export default PublicRoute;