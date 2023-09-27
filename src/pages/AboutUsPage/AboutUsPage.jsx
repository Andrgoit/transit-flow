import {
  Banner,
  About,
  Services,
  Team,
  Testimonial,
  Pricing,
  Faq,
  ClientLogo,
} from '../../components/AboutPage';

import { cards } from '../../data/teamData';
import users from '../../data/testimonialData';
import clientLogoData from '../../data/clientLogoData';

export default function AboutUsPage() {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Team cards={cards} />
      <Testimonial users={users} grey />
      <Pricing />
      <Faq />
      <ClientLogo items={clientLogoData} />
    </>
  );
}
