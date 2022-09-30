import PropType from "prop-types";
import { Li, Item, Number, ContentNavItem } from "./navItem.styled";

function MenuItem({ children, number, type, location, handleContent }) {
  return (
    <Li type={type}>
      {type === "navbar" && (
        <Item
          type={type}
          to={`/${children === "home" ? "" : children}`}
          location={location}
          navItem={children}
        >
          <Number>{number} </Number> {children}
        </Item>
      )}
      {type === "contentNav" && (
        <ContentNavItem
          onClick={() => handleContent(children)}
          location={location}
        >
          {children}
        </ContentNavItem>
      )}
    </Li>
  );
}

export default MenuItem;

MenuItem.prototype = {
  children: PropType.string.isRequired,
  number: PropType.string,
  type: PropType.string,
  location: PropType.string,
  handleContent: PropType.func,
};
