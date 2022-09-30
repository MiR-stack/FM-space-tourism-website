import styled from "styled-components";


const Nav = styled.ul`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 2rem;
list-style-type: none;
color: white;

${(props) => props.type === 'navbar' && `
 background-color: rgba(255, 255, 255, 0.04);
backdrop-filter: blur(40.7742px);
padding: 0 calc(1rem + 4vw);
padding-right: 120px;

`};

@media (max-width: 1000px) {
  font-size: 14px;
  gap: 1rem;
  ${(props) => props.type === 'navbar' && `
  padding:0 20px;
  `
}
}

@media (max-width: 600px) {
  ${(props) =>
    props.type === "navbar" &&
    `
     flex-direction: column;
  justify-content: start;
  padding: 0;
  gap: 0;
  width: 300px;
  height: 100vh;
  position: fixed;
  right: ${props.nav ? 0 : "-100%"};
  top:0;
  transition: .3s linear;
  `}
}
`;

const Close = styled.div`
padding: 0 20px;
padding-top: 30px;
margin-left: auto;
display: none;
@media (max-width: 600px) {
  display: ${props=>props.type === 'navbar' ?'flex':'none'};
}
`;


export {Nav,Close}