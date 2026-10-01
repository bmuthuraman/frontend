import { Search, Bell, } from "lucide-react";
import ProfileImage from "../../assets/images/profile.png";

const DashboardHeader = ({ customer }) => {

    console.log("DashboardHeader customer:", customer);

    return (
        <header className="reen-dashboard-header">

            <div className="d-flex align-items-center justify-content-between px-3 px-md-4 px-xl-5 py-4">

                {/* Page Title */}
                <h1 className="h2 fw-bold mb-0">
                    Overview
                </h1>


                {/* Right Section */}
                <div className="d-flex align-items-center gap-4">

                    {/* Customer */}
                    <div className="text-end d-none d-md-block">

                        <div className="reen-green small fw-medium">
                            {customer?.firstName} {customer?.lastName}
                        </div>

                        <div className="fw-bold fs-4">
                            {customer?.customerNumber || "Customer ID"}
                        </div>

                    </div>


                    {/* Search */}
                    <div className="d-none d-lg-flex align-items-center gap-2 text-secondary">

                        <Search size={22} />

                        <span className="small">
                            Search
                        </span>

                    </div>


                    {/* Notification */}
                    <button className="btn p-2 position-relative">
                        <Bell size={23} />

                        <span className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger p-1">
                        </span>
                    </button>


                    {/* Profile */}
                    <div
                        className="rounded-circle overflow-hidden"
                        style={{
                            width: 52,
                            height: 52,
                        }}
                    >
                        <img
                            src={ProfileImage}
                            alt="Profile"
                            className="w-100 h-100 object-fit-cover"
                        />
                    </div>

                </div>

            </div>

        </header>
    );
};

export default DashboardHeader;