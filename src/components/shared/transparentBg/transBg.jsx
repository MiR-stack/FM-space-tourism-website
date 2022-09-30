import styled from "styled-components";
import PropTypes from "prop-types";

const Bg = styled.div`
  position: fixed;
  top:0;
  left: 0%;
  right: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.triger ? "block" : "none")};
`;

const TransBg = ({ handler, triger }) => {
  return <Bg onClick={handler} triger={triger}></Bg>;
};

export default TransBg;

TransBg.propTypes = {
  handler: PropTypes.func.isRequired,
  triger: PropTypes.bool.isRequired,
};
