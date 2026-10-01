import { ArrowRight } from "lucide-react";
import credit_card_big from "../../assets/images/credit_card_big.png";

export default function Hero() {
    return (
        <section className="reen-bg overflow-hidden">
            <div className="container-fluid px-4 px-md-5 reen-hero d-flex align-items-center">
                <div className="row align-items-center w-100">
                    <div className="col-12 col-md-6 position-relative z-2">
                        <div className="reen-green fw-medium mb-1">Reen Bank</div>
                        <h1 className="display-5 fw-bold lh-sm mb-0">Experience hassle-free banking</h1>
                        <p className="text-secondary mt-3 mb-4">Experience simple, secure, and stress-free banking. Say goodbye to long queues and complex procedures and hello to hassle-free banking with Reen Bank.</p>
                        <div className="d-flex flex-wrap gap-3">
                            <a href="#services" className="btn btn-sm reen-btn-primary px-4 py-2">Get Started</a>
                            <a href="#services" className="btn btn-sm reen-btn px-4 py-2 d-flex align-items-center gap-2">Learn More <ArrowRight size={13} /></a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={credit_card_big} alt="Reen Bank cards" className="img-fluid reen-hero-art" />
                    </div>
                </div>
            </div>
        </section>
    );
}