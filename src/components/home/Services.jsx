import { services } from "../../data/services";
function ServiceItem({ service }) {
    const Icon = service.icon;
    return (
        <article className="d-flex gap-3 mb-5 reen-service">
            <div className="reen-service-icon flex-shrink-0 pt-1">
                <Icon size={30} strokeWidth={1.6} />
            </div>
            <div>
                <h3 className="fw-bold reen-green mb-0">{service.title}</h3>
                <p className="text-secondary mb-0 mt-2">{service.description}</p>
            </div>
        </article>
    );
}
export default function Services() {
    return (
        <section id="services" className="bg-white py-5">
            <div className="container-fluid px-4 px-md-5">
                <h2 className="reen-section-title fw-bold mb-5">Services</h2>
                <div className="row gx-md-5">
                    {
                        services.map(s => <div className="col-12 col-md-6" key={s.title}><ServiceItem service={s} /></div>)
                    }
                </div>
            </div>
        </section>
    );
}
