import styled from "styled-components";

const variant = {
  home: {
    wraper: `
    height:80vh;
    justify-content:space-around;
    @media (max-width:900px){
      flex-direction:column;
    }
   
    `,
  },
  destination: {
    container: `
        width:80%;
        margin:50px auto;
        @media (max-width:768px){
            margin: 20px auto;
        }
        `,
    wraper: `
    padding:20px 0;
    justify-content:space-around;
    @media (max-width:768px){
        flex-direction:column;
    }
    `,
  },
  crew: {
    container: `
        width:80%;
        margin:0 auto;
        `,
    wraper: `
    @media (max-width:768px){
        flex-direction:column;
    }`,
  },
  tecnology: {
    container: `
        width:100%;
    `,
    wraper: `
        justify-content:flex-end;
        @media (max-width:768px){
            flex-direction:column-reverse;
        }
    `,
  },
};

const Container = styled.div`
  width: 80%;
  margin: 20px auto;
  ${(props) => variant[props.variant].container}
`;

const Wraper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap:wrap;
  ${(props) => variant[props.variant].wraper}
`;

export { Container, Wraper };
