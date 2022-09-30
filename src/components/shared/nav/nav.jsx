import NavItem from './navItem'
import { AiOutlineClose } from "react-icons/ai";
import PropTypes from "prop-types";
import { Nav, Close } from "./nav.styled";
import { useLocation } from "react-router-dom";

function Menu({ data, nav, handleNav,type }) {
  const location = useLocation().pathname;

  return (
    <Nav type={type} nav={nav}>
      <Close type={type}>
        <AiOutlineClose size={28} onClick={handleNav} />
      </Close>
      {data.map((item, index) => (
        <NavItem
          key={index}
          type={type}
          number={`0${index}`}
          location={location}
        >
          {item}
        </NavItem>
      ))}
    </Nav>
  );
}

export default Menu;

Menu.propTypes = {
  data: PropTypes.array.isRequired,
  nav: PropTypes.bool,
  handleNav: PropTypes.func,
  type:PropTypes.string.isRequired
};
