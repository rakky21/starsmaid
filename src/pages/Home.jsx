import Hero     from '../components/Hero/Hero.jsx';
import Services from '../components/Services/Services.jsx';
import About    from '../components/About/About.jsx';
import Footer   from '../components/Footer/Footer.jsx';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Footer />
    </main>
  );
}
