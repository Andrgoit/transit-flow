import {
  Banner,
  Services,
  OurGoodness,
  Testimonial,
  Counter,
} from './components';
import users from '../../data/testimonialData';
import { aboutPageServices } from '../../data/servicesData';
import { servicePageItems } from '../../data/counderData';

export default function ServicesPage() {
  return (
    <>
      <Banner />
      <Services services={aboutPageServices} />
      <OurGoodness />
      <Testimonial users={users} />
      <Counter items={servicePageItems} />
    </>
  );
}
