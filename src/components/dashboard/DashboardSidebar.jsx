import { useState } from "react";
import { LayoutGrid, CreditCard, ArrowLeftRight, UserRound, } from "lucide-react";
import Logo from "../common/Logo";
import LogoutButton from "../auth/LogoutButton";
import LogoutModal from "../auth/LogoutModal";
import { Fragment } from "react/jsx-runtime";

const DashboardSidebar = () => {
     const [showLogoutModal, setShowLogoutModal] = useState(false);

    const menuItems = [
        {
            label: "Overview",
            icon: LayoutGrid,
            path: "/dashboard",
        },
        {
            label: "Accounts",
            icon: CreditCard,
            path: "/dashboard/accounts",
        },
        {
            label: "Transactions",
            icon: ArrowLeftRight,
            path: "/dashboard/transactions",
        },
        {
            label: "Profile",
            icon: UserRound,
            path: "/dashboard/profile",
        },
    ];

    return (
        <Fragment>
            <aside className="reen-dashboard-sidebar h-100 d-flex flex-column">

                {/* Logo */}
                <div className="p-4">
                    <Logo />
                </div>


                {/* Navigation */}
                <nav className="px-3 mt-4">

                    {menuItems.map(({ label, icon: Icon, path }, index) => (

                        <a
                            key={label}
                            href={path}
                            className={`reen-sidebar-item d-flex align-items-center gap-4 px-1 py-2 mb-2 ${index === 0 ? "active" : ""
                                }`}
                        >
                            <Icon size={25} strokeWidth={2} />

                            <span>{label}</span>
                        </a>

                    ))}

                </nav>


                {/* Logout */}
                <div className="mt-auto p-4">
                    <LogoutButton onClick={() => setShowLogoutModal(true)} />
                </div>

            </aside>

            <LogoutModal show={showLogoutModal} onClose={() => setShowLogoutModal(false)} />
        </Fragment>
    );
};

export default DashboardSidebar;