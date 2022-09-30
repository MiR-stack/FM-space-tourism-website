import styled from "styled-components";
import { Link } from "react-router-dom"; 

const Content = styled.div`
  max-width: 500px;
  text-align:center;
  padding:0 20px;

`;

const Wraper = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: none;
  transition: .3s ease-in;
  &:hover{
    background-color: rgba(255, 255, 255, 0.3);
    transition: .3s ease-in;

  }
  @media (max-width:600px){
    height: 200px;
    width: 200px;
}
`;

const Button = styled.button`
  height:75%;
  width:75%;
  border-radius: 50%;
  border: none;
  background-color: white;
  text-transform: uppercase;
  z-index: 3;
  font-size: 32px;
  letter-spacing: 2px;
  cursor:pointer;

  @media (max-width:600px){
    font-size:20px;
  }

 
`;


const Explore = styled(Link)`
text-decoration:none;
color:black;
`

export { Wraper, Button, Content,Explore };
