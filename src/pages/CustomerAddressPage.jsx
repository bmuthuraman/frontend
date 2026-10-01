import { useOutletContext } from "react-router-dom";

import CustomerAddressForm from "../components/customer/CustomerAddressForm";

const CustomerAddressPage = () => {
    const { customer, } = useOutletContext();
    console.log("Customer Address Page : ", customer);

    return (
        <div className="container-fluid mb-4">

            <div className="row justify-content-center">

                <div className="col-12">

                    <div className="reen-address-card">

                        <div className="reen-address-header mb-4">

                            <h2>
                                Customer Address
                            </h2>

                            <p>
                                Add your residential
                                or communication address.
                            </p>

                        </div>

                        <CustomerAddressForm customerId={customer?.id} />

                    </div>

                </div>

            </div>

        </div>
    );
};

export default CustomerAddressPage;