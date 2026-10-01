import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import FAQs from "../components/home/FAQs";
import Partners from "../components/home/Partners";

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <FAQs />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
