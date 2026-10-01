import { ArrowRight } from "lucide-react";

const UpgradeCard = () => {

    return (
        <div className="reen-upgrade-card rounded-4 p-4 text-white">

            <ArrowRight size={28} />

            <div className="mt-4">

                <h3 className="h3 fw-bold mb-1">
                    Upgrade to PRO
                </h3>

                <p className="mb-0">
                    Sign in on more than one device
                </p>

            </div>

        </div>
    );
};

export default UpgradeCard;