import styled from "styled-components";
import Heading from "../../components/ui/text/heading";

const variant = {
  home: {},
  destination: {
    wraper: `
    padding:20px 0;
    justify-content:space-around;
    
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
  width: 100%;
  min-height: 80vh;
  ${(props) => variant[props.variant].container}

  @media (max-width:600px) {
    text-align: center;
  }
`;

const Wraper = styled.div`
  min-height: 70vh;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-around;
  ${(props) => variant[props.variant].wraper}

  @media (max-width:600px) {
    margin-top: 20px;
  }
`;

const Header = styled(Heading)`
  padding: 50px;
  padding-bottom: 0px;
  @media (max-width: 600px) {
    padding: 0px 20px;
  }
`;

export { Container, Wraper, Header };
