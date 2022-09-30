import styled from "styled-components";
import SubHeading from "../../../components/ui/text/subHeading";

const Content = styled.div`
  max-width: 700px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    gap: 50px;
  }
`;

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 600px) {
    align-items: center;
  }
`;

const NavItem = styled.div`
  height: 15px;
  width: 15px;
  cursor: pointer;
  background-color: ${(props) =>
    props.id === props.crew ? "white" : "rgba(255,255,255,.4);"};
  border-radius: 50%;
  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const Bio = styled(SubHeading)`
  width: 300px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Image = styled.img`
  height: 74.4vh;

  @media (max-width: 1200px) {
    height: calc(65vh + 5vw);
    width: calc(200px + 10vw);
  }
  @media (max-width: 1200px) {
    height: 300px;
    width: unset;
  }
`;
export { Content, Bio, Wraper, NavItem, Nav, Image };
