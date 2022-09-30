import styled from "styled-components";

 const Container = styled.div`
min-height: 100vh;
width: 100%;
background-image: url(${(props) => props.desktop});
background-position: right;
background-repeat: no-repeat;
background-size: cover;
@media (max-width: 768px) {
  background-image: url(${(props) => props.tablet});
}
@media (max-width: 375px) {
  background-image: url(${(props) => props.mobile});
}
`;

export default Container