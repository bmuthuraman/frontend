import AuthLayout from "../components/layout/AuthLayout";
import RegisterForm from "../components/auth/RegisterForm";

const RegisterPage = () => {
    return (
        <AuthLayout
            title="Experience hassle-free banking"
            description="Experience simple, secure, and stress-free banking. Say goodbye to long queues and complex procedures and hello to hassle-free banking with Reen Bank."
        >
            <RegisterForm />
        </AuthLayout>
    );
};

export default RegisterPage;