import PageLayout from "../../layouts/PageLayout/pageLayout";
import desktop from "../../assets/technology/background-technology-desktop.jpg";
import tablet from "../../assets/technology/background-technology-tablet.jpg";
import mobile from "../../assets/technology/background-technology-mobile.jpg";
import Main from "./main/main";

function Technology() {
  return (
    <PageLayout
      desktopBg={desktop}
      tabletBg={tablet}
      mobileBg={mobile}
    >
      <Main />
    </PageLayout>
  );
}

export default Technology;
