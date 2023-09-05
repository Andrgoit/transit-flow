import HomePageBanner from 'components/HomePage/HomePageBanner/HomePageBanner';
import Services from 'components/HomePage/Services/Services';
import About from 'components/HomePage/About/About';
import Project from 'components/HomePage/Project/Project';
import Testimonial from 'components/HomePage/Testimonial/Testimonial';
import Choos from 'components/HomePage/Choos/Choos';
import Team from 'components/HomePage/Team/Team';
import Contact from 'components/HomePage/Contact/Contact';
import Blog from 'components/HomePage/Blog/Blog';
import PreFooterBanner from 'components/HomePage/PreFooterBanner/PreFooterBanner';

export default function HomePage() {
  return (
    <>
      <HomePageBanner />
      <Services />
      <About />
      <Project />
      <Testimonial />
      <Choos />
      <Team />
      <Contact />
      <Blog />
      <PreFooterBanner />
    </>
  );
}
