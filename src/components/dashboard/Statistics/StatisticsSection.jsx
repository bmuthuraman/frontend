import StatisticRow from "./StatisticRow";

const StatisticsSection = () => {

    return (
        <section className="mt-5">

            <div className="d-flex align-items-center justify-content-between mb-4">

                <h2 className="h4 fw-bold mb-0">
                    Statistics
                </h2>

                <select className="form-select form-select-sm w-auto">
                    <option>
                        This Month
                    </option>

                    <option>
                        Last Month
                    </option>

                    <option>
                        This Year
                    </option>
                </select>

            </div>


            <StatisticRow
                title="Income"
                amount="₦ 54,500.00"
                percentage={75}
                type="income"
            />


            <StatisticRow
                title="Expense"
                amount="₦ 10,000.00"
                percentage={60}
                type="expense"
            />

        </section>
    );
};

export default StatisticsSection;