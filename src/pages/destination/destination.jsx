import PageLayout from "../../layouts/PageLayout/pageLayout";
import desktop from "../../assets/destination/background-destination-desktop.jpg";
import tablet from "../../assets/destination/background-destination-tablet.jpg";
import mobile from "../../assets/destination/background-destination-mobile.jpg";
import Main from "./main/main";

function Destination() {
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

export default Destination;
