const BalanceCard = ({
    balance = "₦ 44,500.00",
    income = "₦ 54,500.00",
    expense = "₦ 10,000.00",
}) => {

    return (
        <div className="reen-balance-card rounded-4 p-4">

            <div className="row align-items-center g-4">

                {/* Logo */}
                <div className="col-auto">

                    <div className="reen-balance-logo">
                        rb
                    </div>

                </div>


                {/* Balance */}
                <div className="col">

                    <div className="reen-card-label">
                        Current Balance
                    </div>

                    <div className="reen-card-value">
                        {balance}
                    </div>

                </div>


                {/* Income */}
                <div className="col">

                    <div className="reen-card-label">
                        Income
                    </div>

                    <div className="reen-card-value">
                        {income}
                    </div>

                </div>


                {/* Expense */}
                <div className="col">

                    <div className="reen-card-label">
                        Expense
                    </div>

                    <div className="reen-card-value">
                        {expense}
                    </div>

                </div>

            </div>

        </div>
    );
};

export default BalanceCard;