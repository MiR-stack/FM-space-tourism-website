import PageLayout from "../../layouts/PageLayout/pageLayout";
import desktop from "../../assets/crew/background-crew-desktop.jpg";
import tablet from "../../assets/crew/background-crew-tablet.jpg";
import mobile from "../../assets/crew/background-crew-mobile.jpg";

function Crew() {
  return (
    <PageLayout
      desktopBg={desktop}
      tabletBg={tablet}
      mobileBg={mobile}
    ></PageLayout>
  );
}

export default Crew;
