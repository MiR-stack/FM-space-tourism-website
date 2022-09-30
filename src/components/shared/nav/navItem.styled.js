import styled from "styled-components";
import { Link } from "react-router-dom";

function activate(path, navitem) {
  if (path === "/" && navitem === "home") {
    return "100%";
  } else if (path.slice(1) === navitem) {
    return "100%";
  }
  return 0;
}

function activate2(path, navitem) {
  if (path === navitem) {
    return "100%";
  }
  return 0;
}

const Li = styled.li`
  position: relative;

  &:hover a::after {
    width: 100%;
    transition: 0.2s linear;
  }

  @media (max-width: 600px) {
    ${(props) =>
      props.type === "navbar"
        ? `
      width:100%;
    `
        : ""}
  }
`;

const Item = styled(Link)`
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  height: 100%;
  display: flex;
  gap: 5px;
  padding: 30px 0;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: white;
    height: 5px;
    width: ${(props) => activate(props.location, props.navitem)};
    border-radius: 10px;
    transition: 0.2s linear;
  }

  @media (max-width: 600px) {
    ${(props) =>
      props.type === "navbar"
        ? `
      width:100%;
      padding:20px 30px;
      &::after{
        display:none;
      }
      &:hover{
       background-color: rgba(255, 255, 255, 0.04);
  
      }
  
    `
        : ""}
  }
`;
const Number = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 600px) {
    display: block;
  }
`;

const ContentNavItem = styled.p`
  color: white;
  text-transform: uppercase;
  height: 100%;
  display: flex;
  gap: 5px;
  padding: 30px 0;
  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: white;
    height: 5px;
    width: ${(props) => activate2(props.location, props.children)};
    border-radius: 10px;
    transition: 0.2s linear;
  }
`;

export { Li, Item, Number, ContentNavItem };
