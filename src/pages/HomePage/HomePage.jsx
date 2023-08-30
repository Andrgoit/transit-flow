import Header from 'components/Header/Header';
import HomePageBanner from 'components/HomePageBanner/HomePageBanner';
import Footer from 'components/Footer/Footer';
import HomePageServices from 'components/HomePageServices/HomePageServices';
import HomePageAbout from 'components/HomePageAbout/HomePageAbout';

export default function HomePage() {
  return (
    // <div style={{ height: "100vh" }}>
    <div>
      <Header />
      <HomePageBanner />
      <HomePageServices />
      <HomePageAbout />
      <Footer />
    </div>
  );
}
