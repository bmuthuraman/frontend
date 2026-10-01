import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCustomerRequest } from "../../store/slices/customerSlice";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = () => {
    const dispatch = useDispatch();
    const { customer, loading, error, } = useSelector((state) => state.customer);

    useEffect(() => {
        if (!customer && !loading) {
            dispatch(getCustomerRequest(1));
        }

    }, [dispatch, customer,  loading, ]);

    return (
        <div className="reen-dashboard min-vh-100">

            <div className="container-fluid">

                <div className="row">

                    <aside className="col-12 col-lg-2">
                        <DashboardSidebar customer={customer} />
                    </aside>

                    <main className="col-12 col-lg-10">
                        <DashboardHeader customer={customer} loading={loading} error={error} />
                        <Outlet context={{ customer, loading, error, }} />
                    </main>
                </div>

            </div>

        </div>
    );
};

export default DashboardLayout;