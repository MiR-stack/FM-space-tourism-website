import styled from "styled-components";
import PropType from 'prop-types'

const size = {
  h1: `
    font-size:150px;
    @media (max-width:600px){
      font-size:100px;
    }
  `,
  h2: `
  font-size:100px;
  @media (max-width:600px){
    font-size:56px;
  }
`,
  h3: "56px",
  h4: "32px",
  h5:`
    font-size:26px;
    @media (max-width:600px){
      font-size:16px;
    }
  `,
};

const Heading = styled.p`
  color: white;
  text-transform: uppercase;
  font-size: ${(props) => size[props.size]};

  ${props => size[props.size]}

  @media (max-width:600px){
    ${(props) => props.size === "h1" ? 'font-size:80px':null}
  }
  ${(props) => props.size === "h5" ? "letter-spacing:4.75px; color:#D0D6F9":null}
  
`;
 
export default Heading;


Heading.propTypes ={
  size:PropType.string.isRequired
}