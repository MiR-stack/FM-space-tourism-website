import { useState } from "react";
import Nav from "../../../components/shared/nav/nav";
import HeroLayout from "../../../layouts/heroLayout/heroLayout";
import { Content, Image, Footer } from "./main.styled";
import data from "./data";
import Heading from "../../../components/ui/text/heading";
import SubHeading from "../../../components/ui/text/subHeading";

const Main = () => {
  const navItems = data.map((item) => item.name);

  const [nav, setNav] = useState("moon");

  const [content, setContent] = useState(data[0]);

  function handleContent(content) {
    setContent(data.find((item) => item.name === content));
    setNav(content);
  }

  return (
    <HeroLayout variant="destination" title="01 pick your destination">
      <Image src={content.image} alt={content.name} />
      <Content>
        <Nav
          data={navItems}
          type="contentNav"
          handleContent={handleContent}
          Location={nav}
        />
        <Heading size="h2">{content.name} </Heading>
        <SubHeading variant="body">{content.shortDes} </SubHeading>
        <Footer>
          <div>
            <SubHeading variant="s2">avg. distance</SubHeading>
            <SubHeading variant="s1">{content.distance} </SubHeading>
          </div>
          <div>
            <SubHeading variant="s2">est. travel time</SubHeading>
            <SubHeading variant="s1">{content.travelTime} </SubHeading>
          </div>
        </Footer>
      </Content>
    </HeroLayout>
  );
};

export default Main;
