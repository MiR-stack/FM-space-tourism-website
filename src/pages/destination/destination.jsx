import PageLayout from "../../layouts/PageLayout/pageLayout";
import desktop from "../../assets/destination/background-destination-desktop.jpg";
import tablet from "../../assets/destination/background-destination-tablet.jpg";
import mobile from "../../assets/destination/background-destination-mobile.jpg";

function Destination() {
  return (
    <PageLayout
      desktopBg={desktop}
      tabletBg={tablet}
      mobileBg={mobile}
    ></PageLayout>
  );
}

export default Destination;
