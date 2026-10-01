import BalanceCard from "./Balance/BalanceCard";
import AccountsSection from "./Accounts/AccountsSection";
import StatisticsSection from "./Statistics/StatisticsSection";
import TransactionsSection from "./Transactions/TransactionsSection";
import UpgradeCard from "./UpgradeCard";

const DashboardContent = () => {

    return (
        <div className="row g-5">

            {/* CENTER */}
            <div className="col-12 col-xl-8">

                {/* Balance */}
                <section>

                    <h2 className="h4 fw-bold mb-4">
                        Current Account Balance
                    </h2>

                    <BalanceCard />

                </section>


                {/* Accounts */}
                <AccountsSection />


                {/* Statistics */}
                <StatisticsSection />

            </div>


            {/* RIGHT */}
            <div className="col-12 col-xl-4">

                <TransactionsSection />

                <div className="mt-5">
                    <UpgradeCard />
                </div>

            </div>

        </div>
    );
};

export default DashboardContent;