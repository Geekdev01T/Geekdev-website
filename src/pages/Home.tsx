import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { WhyUs } from '../components/WhyUs';
import { Testimonials } from '../components/Testimonials';
import { Partners } from '../components/Partners';

export function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <About />
      <Services />
      <WhyUs />
      <Testimonials />
    </main>
  );
}
