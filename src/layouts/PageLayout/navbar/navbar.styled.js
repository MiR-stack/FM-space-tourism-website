import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:40px 0;
  padding-left:40px;
`;

const MenuIcon = styled(AiOutlineMenu)`
  color: white;
  margin: 0 20px;
  display: none;
  cursor: pointer;
  @media (max-width: 600px) {
    display: block;
  }
`;

const Wraper = styled.div`
  position:relative;
`

const Line = styled.div`
  height: 2px;
  background-color: white;
  width: calc(40vw);
  position: absolute;
  top: 50%;
  left:-38vw;
  z-index:3;
  transform: translateY(-50%);

  @media (max-width:1300px){
    display: none;
  }
  
`;

export { Nav, MenuIcon,Line,Wraper };
