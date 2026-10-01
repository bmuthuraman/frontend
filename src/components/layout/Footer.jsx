import Logo from "../common/Logo";
import SocialIcons from "../common/SocialIcons";

export default function Footer() {
    return (
        <footer id="contact" className="reen-bg">
            <div className="row d-flex justify-content-between align-items-end g-5">
                <div className="col-12 col-md-5 ps-md-5">
                    <div className="row">
                        <div className="col-6">
                            <h4 className="fw-bold reen-green">HELP</h4>
                            <div className="d-flex flex-column gap-3 mt-3">
                                <a href="#help" className="text-secondary text-decoration-none">Help Center</a>
                                <a href="#contact" className="text-secondary text-decoration-none">Contact Us</a>
                                <a href="#how-to-use" className="text-secondary text-decoration-none">How to Use</a>
                            </div>
                        </div>
                        <div className="col-6">
                            <h4 className="fw-bold reen-green">ABOUT</h4>
                            <div className="d-flex flex-column gap-3 mt-3">
                                <a href="#about" className="text-secondary text-decoration-none">About Reen Bank</a>
                                <a href="#terms" className="text-secondary text-decoration-none">Terms &amp; Conditions</a>
                                <a href="#privacy" className="text-secondary text-decoration-none">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 py-4">
                        <Logo />
                        <p className="small text-secondary mt-4 mb-2">2023 ReenBank. All rights reserved!</p>
                        <SocialIcons />
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <div className="reen-footer-card p-4 p-md-5 d-flex flex-column justify-content-center text-white">
                        <h4 className="mb-4">New to Reen Bank?</h4>
                        <h2 className="fw-bold mb-4">Enter your Email<br />and Get Started Now</h2>
                        <div className="row g-3" style={{ maxWidth: 450 }}>
                            <div className="col-12 col-sm">
                                <input type="email" placeholder="Enter your Email" className="form-control reen-email bg-dark bg-opacity-25 text-white" />
                            </div>
                            <div className="col-12 col-sm-auto">
                                <button className="btn reen-btn-primary px-4 w-100">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
