import styled from "styled-components";
import PropType from "prop-types";

const size = {
  h1: `
    font-size:150px;
    @media (max-width:600px){
      font-size:80px
    }
  `,
  h2: `
  font-size:100px;
  @media (max-width:600px){
    font-size:56px;
  }
`,
  h3: `font-size:56px; @media (max-width:600px){
    font-size:46px;
  } `,
  h4: `font-size:32px; color:#d6d6d6 ;
  
    @media (max-width:600px){
      font-size:22px;
    }
  `,
  h5: `
    font-size:26px;
    letter-spacing:4.75px; 
    color:#D0D6F9;
    @media (max-width:600px){
      font-size:16px;
    }
  `,
};

const Heading = styled.p`
  color: white;
  text-transform: uppercase;
  ${(props) => size[props.size]}
`;

export default Heading;

Heading.propTypes = {
  size: PropType.string.isRequired,
};
