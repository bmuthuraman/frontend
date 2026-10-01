import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage";

import DashboardPage from "../pages/DashboardPage";
import CustomerAddressPage from "../pages/CustomerAddressPage";
// import ProfilePage from "../pages/ProfilePage";
// import AccountsPage from "../pages/AccountsPage";
// import TransactionsPage from "../pages/TransactionsPage";

import ProtectedRoute from "../routes/ProtectedRoute";
import DashboardLayout from "../components/dashboard/DashboardLayout";

const AppRoutes = () => {

    return (
        <Routes>

            {/* =========================
                PUBLIC
            ========================= */}

            <Route
                path="/"
                element={<LandingPage />}
            />

            <Route
                path="/login"
                element={<LoginPage />}
            />

            <Route
                path="/register"
                element={<RegisterPage />}
            />


            {/* =========================
                AUTHENTICATED
            ========================= */}

            <Route element={<ProtectedRoute />}>

                {/* DashboardLayout used ONLY ONCE */}
                <Route element={<DashboardLayout />}>

                    <Route
                        path="/dashboard"
                        element={<DashboardPage />}
                    />

                    <Route
                        path="/address"
                        element={<CustomerAddressPage />}
                    />

                    {/* <Route
                        path="/profile"
                        element={<ProfilePage />}
                    />

                    <Route
                        path="/accounts"
                        element={<AccountsPage />}
                    />

                    <Route
                        path="/transactions"
                        element={<TransactionsPage />}
                    /> */}

                </Route>

            </Route>


            {/* =========================
                NOT FOUND
            ========================= */}

            <Route
                path="*"
                element={<NotFoundPage />}
            />

        </Routes>
    );
};

export default AppRoutes;