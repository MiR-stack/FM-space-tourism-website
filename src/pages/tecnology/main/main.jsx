import { useEffect, useState } from "react";
import Heading from "../../../components/ui/text/heading";
import SubHeading from "../../../components/ui/text/subHeading";
import HeroLayout from "../../../layouts/heroLayout/heroLayout";
import data from "../data";
import { Content, Header, Image, Nav, NavItem, Wraper } from "./main.styled";

const Main = () => {
  const [technology, setTechnology] = useState(data[0]);
  const [width, setWidth] = useState(window.innerWidth);

  const handleTechnology = (id) => {
    setTechnology(data.find((item) => item.id === id));
  };

  const Width = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    
    window.addEventListener("resize",Width);

    return () => window.removeEventListener("resize", Width);
  });

  console.log(width);
  return (
    <HeroLayout variant="technology" title="03 space launch 101">
      <Content>
        <Nav>
          {data.map((item, index) => (
            <NavItem
              key={item.id}
              id={item.id}
              technology={technology.id}
              onClick={() => handleTechnology(item.id)}
            >
              {index + 1}{" "}
            </NavItem>
          ))}
        </Nav>
        <Wraper>
          <Header variant="body"> the terminology...</Header>
          <Heading size="h3">{technology.title} </Heading>
          <SubHeading variant="body">{technology.shortDes} </SubHeading>
        </Wraper>
      </Content>

      <Image
        src={
          width > 1200 ? technology.image.portrait : technology.image.landscape
        }
        alt={technology.title}
      />
    </HeroLayout>
  );
};

export default Main;
