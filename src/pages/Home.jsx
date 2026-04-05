import Hero from '../components/Hero/Hero.jsx';
import Services from '../components/Services/Services.jsx';
import About from '../components/About/About.jsx';
import Footer from '../components/Footer/Footer.jsx';
import HowItWorks from '../components/HowItWorks/HowItworks.jsx';
import BookingSection from '../components/BookingSection/BookingSection.jsx';
import ServiceArea from '../components/ServiceArea/ServiceArea.jsx';
import WhyUs from '../components/WhyUs/WhyUs.jsx';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <HowItWorks />
      <WhyUs />
      <Services />
      <BookingSection />
      <ServiceArea />
      <Footer />
    </main>
  );
}
