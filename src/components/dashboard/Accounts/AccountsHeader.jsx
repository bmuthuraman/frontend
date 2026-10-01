import { Plus } from "lucide-react";

const AccountsHeader = () => {

    return (
        <div className="d-flex align-items-center justify-content-between mb-4">

            <h2 className="h4 fw-bold mb-0">
                Accounts
            </h2>

            <button className="btn btn-light rounded-3 p-2">
                <Plus size={22} />
            </button>

        </div>
    );
};

export default AccountsHeader;