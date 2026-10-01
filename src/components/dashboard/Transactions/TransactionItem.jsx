const TransactionItem = ({
    name,
    date,
    amount,
    type,
}) => {

    const isIncome = type === "income";

    return (
        <div className="reen-transaction-item d-flex align-items-center justify-content-between py-3 border-bottom">

            <div>
                <div className="small fw-medium">
                    {name}
                </div>
            </div>

            <div className="small text-secondary">
                {date}
            </div>

            <div
                className={`fw-semibold ${
                    isIncome
                        ? "text-success"
                        : "text-danger"
                }`}
            >
                {isIncome ? "+" : "-"} {amount}
            </div>

        </div>
    );
};

export default TransactionItem;