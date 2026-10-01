import Logo from "../common/Logo";
export default function Header() {
    return (
        <header className="position-absolute top-0 start-0 w-100 z-3">
            <div className="container-fluid px-4 py-3 px-md-5">
                <div className="d-flex align-items-center justify-content-between">
                    <Logo />
                    <nav className="d-none d-md-flex gap-4">
                        <a href="#about" className="text-dark text-decoration-none">About</a>
                        <a href="#contact" className="text-dark text-decoration-none">Contact Us</a>
                    </nav>
                    <a href="/login" className="btn reen-btn px-4">Login</a>
                </div>
            </div>
        </header>
    )
}
