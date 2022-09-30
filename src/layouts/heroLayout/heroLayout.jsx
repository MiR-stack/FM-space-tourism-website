import { Container,Wraper } from "./heroLayout.styled";
import Heading from "../../components/ui/text/heading";
import PropTypes from "prop-types";

const HeroLayout = ({ title, children,variant }) => {
  return (
    <Container variant={variant}>
      <Heading size="h5">{title} </Heading>
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
