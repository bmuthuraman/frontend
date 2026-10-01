import { ArrowRight } from "lucide-react";
import TransactionItem from "./TransactionItem";

const TransactionsSection = () => {

    const transactions = [
        {
            id: 1,
            name: "Oluwaben Jamin",
            date: "06.Mar.2023 - 09:39",
            amount: "10,000.00",
            type: "expense",
        },
        {
            id: 2,
            name: "Oluwaben Jamin",
            date: "06.Mar.2023 - 09:39",
            amount: "10,000.00",
            type: "income",
        },
        {
            id: 3,
            name: "Oluwaben Jamin",
            date: "06.Mar.2023 - 09:39",
            amount: "10,000.00",
            type: "expense",
        },
        {
            id: 4,
            name: "Oluwaben Jamin",
            date: "06.Mar.2023 - 09:39",
            amount: "10,000.00",
            type: "income",
        },
        {
            id: 5,
            name: "Oluwaben Jamin",
            date: "06.Mar.2023 - 09:39",
            amount: "10,000.00",
            type: "expense",
        },
    ];

    return (
        <section>

            <div className="d-flex align-items-center justify-content-between mb-2">

                <h2 className="h4 fw-bold mb-0">
                    Transactions
                </h2>

                <a
                    href="/dashboard/transactions"
                    className="reen-green fs-3 text-decoration-none"
                >
                    <ArrowRight />
                </a>

            </div>


            <div>

                {transactions.map((transaction) => (

                    <TransactionItem
                        key={transaction.id}
                        {...transaction}
                    />

                ))}

            </div>

        </section>
    );
};

export default TransactionsSection;