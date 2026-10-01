import Logo from "../common/Logo";
import SocialIcons from "../common/SocialIcons";

const AuthLayout = ({
    children,
    title,
    description,
}) => {

    return (
        <main className="reen-auth-page">

            <div className="container-fluid">

                <div className="row min-vh-100 align-items-center">

                    {/* LEFT */}
                    <div className="col-12 col-lg-6">

                        <div className="reen-auth-left">

                            <div className="mb-5">
                                <Logo />
                            </div>

                            <div className="reen-auth-content">

                                <div className="reen-green fw-medium mb-2 fs-3">
                                    Reen Bank
                                </div>

                                <h1 className="reen-auth-title fw-bold mb-4">
                                    {title}
                                </h1>

                                <p className="reen-auth-description mb-0">
                                    {description}
                                </p>

                            </div>

                            <div className="mt-5 pt-4">
                                <SocialIcons />
                            </div>

                        </div>

                    </div>


                    {/* RIGHT */}
                    <div className="col-12 col-lg-6">

                        <div className="reen-auth-right">
                            {children}
                        </div>

                    </div>

                </div>

            </div>

        </main>
    );
};

export default AuthLayout;