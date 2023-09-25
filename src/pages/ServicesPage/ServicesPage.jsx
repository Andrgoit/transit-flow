import {
  Banner,
  Services,
  OurGoodness,
  Testimonial,
} from '../../components/ServicesPage';
import users from '../../data/testimonialData';

export default function ServicesPage() {
  return (
    <>
      <Banner />
      <Services />
      <OurGoodness />
      <Testimonial users={users} />
    </>
  );
}
