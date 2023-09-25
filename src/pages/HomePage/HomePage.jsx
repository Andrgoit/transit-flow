import {
  HomePageBanner,
  Services,
  About,
  Project,
  Testimonial,
  Choos,
  Team,
  Contact,
  Blog,
  PreFooterBanner,
} from '../../components/HomePage';

import { cards } from '../../data/teamData';
import users from '../../data/testimonialData';

export default function HomePage() {
  return (
    <>
      <HomePageBanner />
      <Services />
      <About />
      <Project />
      <Testimonial users={users} />
      <Choos />
      <Team cards={cards} />
      <Contact />
      <Blog />
      <PreFooterBanner />
    </>
  );
}
