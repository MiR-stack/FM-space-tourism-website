import Heading from "../../../components/ui/text/heading";
import HeroLayout from "../../../layouts/heroLayout/heroLayout";
import { Content, Nav, NavItem, Wraper, Image, Bio } from "./main.styled";
import data from "../data";
import { useState } from "react";

const Main = () => {
  const [crew, setCrew] = useState(data[0]);

  function handleCrew(id) {
    setCrew(data.find((crew) => crew.id === id));
  }

  return (
    <HeroLayout variant="crew" title="02 meet our crew">
      <Content>
        <Wraper>
          <Heading size="h4">{crew.position} </Heading>
          <Heading size="h3">{crew.name} </Heading>
          <Bio variant="body">{crew.bio} </Bio>
        </Wraper>
        <Nav>
          {data.map((item) => (
            <NavItem
              key={item.id}
              onClick={() => handleCrew(item.id)}
              id={item.id}
              crew={crew.id}
            />
          ))}
        </Nav>
      </Content>
      <Image src={crew.image} alt={crew.name} />
    </HeroLayout>
  );
};

export default Main;
