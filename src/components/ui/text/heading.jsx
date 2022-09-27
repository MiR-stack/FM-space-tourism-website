import styled from "styled-components";

const size = {
  h1: "150px",
  h2: "100px",
  h3: "56px",
  h4: "32px",
  h5: "28px",
};

const Heading = styled.p`
  color: white;
  text-transform: uppercase;
  background-color:black;
  font-size: ${(props) => size[props.size]};
  ${(props) => props.size === "h5" ? "letter-spacing:4.75px; color:#D0D6F9":null}
`;

export default Heading;
