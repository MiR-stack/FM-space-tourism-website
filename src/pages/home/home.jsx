import PageLayout from "../../layouts/PageLayout/pageLayout";
import desktop from "../../assets/home/background-home-desktop.jpg";
import tablet from "../../assets/home/background-home-tablet.jpg";
import mobile from "../../assets/home/background-home-mobile.jpg";
import HeroSection from "./hero_section/hero_section";

function Home() {
  return (
    <PageLayout
      desktopBg={desktop}
      tabletBg={tablet}
      mobileBg={mobile}
    >
      <HeroSection />
    </PageLayout>
  );
}

export default Home;
