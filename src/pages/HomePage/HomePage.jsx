import Header from "../../components/Header/Header";
import HomePageBanner from "components/HomePageBanner/HomePageBanner";
import Footer from "components/Footer/Footer";

export default function HomePage() {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <HomePageBanner />
      <Footer />
    </div>
  );
}
