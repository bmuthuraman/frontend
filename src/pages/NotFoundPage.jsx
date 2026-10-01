import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <main className="reen-auth-page min-vh-100 d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-center text-center">

                    <div className="col-12 col-md-8 col-lg-6">

                        {/* 404 */}
                        <div
                            className="fw-bold reen-green mb-2"
                            style={{
                                fontSize: "clamp(80px, 15vw, 160px)",
                                lineHeight: 1,
                            }}
                        >
                            404
                        </div>

                        {/* Title */}
                        <h1 className="fw-bold mb-3">
                            Page Not Found
                        </h1>

                        {/* Description */}
                        <p className="text-secondary mb-4">
                            Sorry, the page you are looking for
                            doesn't exist or may have been moved.
                        </p>

                        {/* Buttons */}
                        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">

                            <button
                                type="button"
                                className="btn reen-auth-button px-4 d-flex align-items-center justify-content-center gap-2"
                                onClick={() =>
                                    navigate("/dashboard")
                                }
                            >
                                <Home size={20} />
                                Go to Dashboard
                            </button>

                            <button
                                type="button"
                                className="btn btn-outline-secondary px-4 d-flex align-items-center justify-content-center gap-2"
                                onClick={() =>
                                    navigate(-1)
                                }
                            >
                                <ArrowLeft size={20} />
                                Go Back
                            </button>

                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
};

export default NotFoundPage;