//pages
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

//data
import { cards } from '../../data/teamData';
import users from '../../data/testimonialData';
import projectCards from '../../data/projectData';
import services from '../../data/servicesData';

export default function HomePage() {
  return (
    <>
      <HomePageBanner />
      <Services services={services} />
      <About />
      <Project cards={projectCards} />
      <Testimonial users={users} />
      <Choos />
      <Team cards={cards} />
      <Contact />
      <Blog />
      <PreFooterBanner />
    </>
  );
}
