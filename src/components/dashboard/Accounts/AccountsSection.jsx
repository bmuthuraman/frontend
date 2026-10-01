import AccountsHeader from "./AccountsHeader";
import AccountCard from "./AccountCard";

const AccountsSection = () => {

    const accounts = [
        {
            id: 1,
            name: "Main Account",
            balance: "₦ 44,500.00",
        },
        {
            id: 2,
            name: "School Savings",
            balance: "₦ 44,500.00",
        },
        {
            id: 3,
            name: "Holiday Plan",
            balance: "₦ 44,500.00",
        },
    ];

    return (
        <section className="mt-5">

            <AccountsHeader />

            <div className="row g-4">

                {accounts.map((account) => (

                    <div
                        key={account.id}
                        className="col-12 col-md-4"
                    >
                        <AccountCard
                            name={account.name}
                            balance={account.balance}
                        />
                    </div>

                ))}

            </div>

        </section>
    );
};

export default AccountsSection;