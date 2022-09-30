import Heading from "../../../components/ui/text/heading";
import SubHeading from "../../../components/ui/text/subHeading";
import HeroLayout from "../../../layouts/heroLayout/heroLayout";
import { Button, Content, Wraper } from "./heroSection.styled";

function HeroSection() {
  return (
    <HeroLayout variant="home">
      <Content>
        <Heading size="h5">so, you want to travel to</Heading>
        <Heading size="h1">space</Heading>
        <SubHeading variant="body">
          let's face it : if want to go to space. you might as well genuinely go
          to outer space and not hover kind of on the edge of it . well sit back
          , and relax because we'll git you a truly out of this experience!
        </SubHeading>
      </Content>
      <Wraper>
        <Button>Explore</Button>
      </Wraper>
    </HeroLayout>
  );
}

export default HeroSection;
