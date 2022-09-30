import { Container,Header,Wraper } from "./heroLayout.styled";
import PropTypes from "prop-types";

const HeroLayout = ({ title, children,variant }) => {
  return (
    <Container variant={variant}>
      <Header size="h5">{title} </Header>
      <Wraper variant={variant}>{children} </Wraper>
    </Container>
  );
};

export default HeroLayout;

HeroLayout.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.any,
  variant:PropTypes.string
};
