import AuthLayout from "../components/layout/AuthLayout";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {

    return (
        <AuthLayout
            title="Welcome Back"
            description="Enter Your Details to login to your Banking Dashboard again!"
        >
            <LoginForm />
        </AuthLayout>
    );
};

export default LoginPage;