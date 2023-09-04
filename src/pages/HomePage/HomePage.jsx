import HomePageBanner from 'components/HomePage/HomePageBanner/HomePageBanner';
import HomePageServices from 'components/HomePage/HomePageServices/HomePageServices';
import HomePageAbout from 'components/HomePage/HomePageAbout/HomePageAbout';
import HomePageProject from 'components/HomePage/HomePageProject/HomePageProject';
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
      <HomePageServices />
      <HomePageAbout />
      <HomePageProject />
      <Testimonial />
      <Choos />
      <Team />
      <Contact />
      <Blog />
      <PreFooterBanner />
    </>
  );
}
