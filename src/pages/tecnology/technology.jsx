import PageLayout from "../../layouts/PageLayout/pageLayout";
import desktop from "../../assets/technology/background-technology-desktop.jpg";
import tablet from "../../assets/technology/background-technology-tablet.jpg";
import mobile from "../../assets/technology/background-technology-mobile.jpg";

function Technology() {
  return (
    <PageLayout
      desktopBg={desktop}
      tabletBg={tablet}
      mobileBg={mobile}
    ></PageLayout>
  );
}

export default Technology;
