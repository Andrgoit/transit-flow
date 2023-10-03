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
} from './components';

//data
import { cards } from '../../data/teamData';
import { homePageEvents } from '../../data/blogData';
import users from '../../data/testimonialData';
import projectCards from '../../data/projectData';
import { services } from '../../data/servicesData';
import homePageChooses from '../../data/choosData';

export default function HomePage() {
  return (
    <>
      <HomePageBanner />
      <Services services={services} />
      <About />
      <Project cards={projectCards} />
      <Testimonial users={users} />
      <Choos chooses={homePageChooses} />
      <Team cards={cards} />
      <Contact />
      <Blog events={homePageEvents} />
      <PreFooterBanner />
    </>
  );
}
