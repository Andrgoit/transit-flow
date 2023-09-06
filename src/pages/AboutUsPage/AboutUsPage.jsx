import Banner from 'components/AboutPage/Banner/Banner';
import About from 'components/AboutPage/About/About';
import Services from 'components/AboutPage/Services/Services';
import Team from 'components/AboutPage/Team/Team';
import Testimonial from 'components/AboutPage/Testimonial/Testimonial';
import Pricing from 'components/AboutPage/Pricing/Pricing';
import Faq from 'components/AboutPage/Faq/Faq';
import ClientLogo from 'components/AboutPage/ClientLogo/ClientLogo';

export default function AboutUsPage() {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Team />
      <Testimonial />
      <Pricing />
      <Faq />
      <ClientLogo />
    </>
  );
}
