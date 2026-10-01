const AccountCard = ({
    name,
    balance,
}) => {

    return (
        <div className="reen-account-card rounded-4 p-4 h-100">

            <div className="reen-card-label mb-2">
                {name}
            </div>

            <div className="reen-card-value">
                {balance}
            </div>

        </div>
    );
};

export default AccountCard;