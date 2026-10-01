const faqs = ["What types of accounts does Reen Bank offer?", "Is Reen Bank FDIC insured?", "How can I access my Reen Bank account online?", "What security measures does Reen Bank have in place to protect my financial information?"];
export default function FAQs() {
    return (
        <section className="reen-bg reen-faq py-5">
            <div className="container-fluid px-4 px-md-5 position-relative z-2">
                <h2 className="reen-section-title fw-bold mb-5">FAQs</h2>
                <div className="row g-5">
                    <div className="col-12 col-md-6">
                        <h4 className="fw-bold mb-3"><a href="#faq" className="d-block reen-green text-decoration-underline fw-medium lh-sm">How do I sign up for an account with Reen Bank?</a></h4>
                        <p className="reen-faq-copy text-secondary mt-4 mb-0">You can sign up for an account with Reen Bank online by visiting our website and filling out the online application form. Once your application is approved, you will receive instructions for setting up your account and accessing our online banking platform.</p>
                    </div>
                    <div className="col-12 col-md-6">
                        {
                            faqs.map(f =>
                                <a href="#faq" key={f} className="d-flex justify-content-between gap-3 reen-purple fw-bold text-decoration-none mb-3">
                                    <span className="text-decoration-underline">{f}</span>
                                    <span className="fs-6 text-decoration-none flex-shrink-0">→</span>
                                </a>
                            )}
                    </div>
                </div>
            </div>
            <div className="reen-question-mark">?</div>
        </section>
    );
}
