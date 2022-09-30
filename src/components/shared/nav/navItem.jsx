import PropType from "prop-types";
import {Li,Item,Number} from './navItem.styled'

function MenuItem({ children, number, type ,location}) {
  return (
    <Li type={type}>
      <Item
        type={type}
        to={`/${children === "home" ? "" : children}`}
        location={location}
        navitem={children}
      >
        <Number>{number} </Number> {children}{" "}
      </Item>
    </Li>
  );
}

export default MenuItem;

MenuItem.prototype = {
  children: PropType.string.isRequired,
  number: PropType.string,
  type:PropType.string,
  location: PropType.string
};
