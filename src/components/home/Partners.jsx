import mastercard from "../../assets/images/master_card.png";
import visa from "../../assets/images/visa.png";
import paypal from "../../assets/images/paypal.png";
import payoneer from "../../assets/images/payoneer.png";


export default function Partners() {
    return (
        <section className="bg-white py-5">
            <div className="container-fluid px-4 px-md-5">
                <h2 className="text-center fw-bold mb-4">Supported by various finance services</h2>
                <div className="d-flex justify-content-center align-items-center gap-6">
                    <div className="d-flex justify-content-center align-items-center py-4">
                        <img src={mastercard} alt="MasterCard" className="img-fluid" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center py-4">
                        <img src={visa} alt="Visa" className="img-fluid" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center py-4">
                        <img src={paypal} alt="PayPal" className="img-fluid" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center py-4">
                        <img src={payoneer} alt="PayOneer" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
}
