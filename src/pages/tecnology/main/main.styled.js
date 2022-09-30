import styled from "styled-components";
import SubHeading from "../../../components/ui/text/subHeading";

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  width:50%;
  @media (max-width:1200px){
    width:500px;
  }
  @media (max-width:800px){
    text-align:center;
    width:100%;
    padding:15px;
    padding-bottom: 20px;

  }

@media (max-width:1200px){
    flex-direction: column;
}
`;
const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Header = styled(SubHeading)`
  text-transform: uppercase;
`;

const NavItem = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  background-color: none;
  border-radius: 50%;
  color: white;

  ${props => props.id === props.technology && `
  
  background:white;
  color:black;
  `}

`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  
@media (max-width:1200px){
    flex-direction: row;
}
`;

const Image = styled.img`
         @media (max-width:800px){
            max-width: 100%;
         }
`;

export { Content, Wraper, Header, NavItem, Nav, Image };
