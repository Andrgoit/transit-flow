import {
  Banner,
  About,
  Services,
  Team,
  Testimonial,
  Pricing,
  Faq,
  ClientLogo,
} from './components';

import { cards } from '../../data/teamData';
import { aboutPageServices } from '../../data/servicesData';
import users from '../../data/testimonialData';
import clientLogoData from '../../data/clientLogoData';
import prices from '../../data/pricingData';

export default function AboutUsPage() {
  return (
    <>
      <Banner />
      <About />
      <Services services={aboutPageServices} />
      <Team cards={cards} />
      <Testimonial users={users} grey />
      <Pricing prices={prices} />
      <Faq />
      <ClientLogo items={clientLogoData} />
    </>
  );
}
