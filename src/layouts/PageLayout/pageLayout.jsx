import Navbar from "./navbar/navbar";
import Container from "./pageLayout.styled";

const PageLayout = ({ children,desktopBg,tabletBg,mobileBg }) => {
  
  return (
    <Container desktop={desktopBg} tablet={tabletBg} mobile={mobileBg}>
      <Navbar />
      {children}
    </Container>
  );
};

export default PageLayout;
