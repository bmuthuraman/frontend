const StatisticRow = ({
    title,
    amount,
    percentage,
    type = "income",
}) => {

    const color =
        type === "income"
            ? "var(--reen-green)"
            : "var(--reen-red)";

    return (
        <div className="d-flex align-items-center gap-3 mb-4">

            <div
                className="rounded-2 border d-flex align-items-center justify-content-center fw-bold"
                style={{
                    width: 40,
                    height: 40,
                    color,
                    borderColor: color,
                }}
            >
                rb
            </div>


            <div
                className="fw-semibold"
                style={{ width: 80 }}
            >
                {title}
            </div>


            <div className="flex-grow-1">

                <div className="progress">
                    <div
                        className="progress-bar"
                        style={{
                            width: `${percentage}%`,
                            backgroundColor: color,
                        }}
                    />
                </div>

            </div>


            <div className="fw-semibold">
                {amount}
            </div>

        </div>
    );
};

export default StatisticRow;