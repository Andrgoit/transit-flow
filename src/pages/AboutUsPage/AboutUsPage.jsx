import Banner from 'components/AboutPage/Banner/Banner';
import About from 'components/AboutPage/About/About';
import Services from 'components/AboutPage/Services/Services';
import Team from 'components/AboutPage/Team/Team';
import Testimonial from 'components/AboutPage/Testimonial/Testimonial';
import Pricing from 'components/AboutPage/Pricing/Pricing';

export default function AboutUsPage() {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Team />
      <Testimonial />
      <Pricing />
    </>
  );
}
