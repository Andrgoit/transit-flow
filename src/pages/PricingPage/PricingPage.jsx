import { Banner, Pricing, Testimonial } from './components';
import prices from '../../data/pricingData';
import users from '../../data/testimonialData';

export default function PricingPage() {
  return (
    <>
      <Banner />
      <Pricing prices={prices} />
      <Testimonial users={users} grey />
    </>
  );
}
