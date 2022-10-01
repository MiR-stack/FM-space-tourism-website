import styled from "styled-components";
import Heading from "../../components/ui/text/heading";

const variant = {
  home: {
   
  },
  destination: {
    container:`
    width:80%;
    margin:0 auto;

    @media (max-width:1200px){
      width:90%;
    }
    @media (max-width:768px){
      width:100%;
    }
    `,
    wraper: `
    padding:20px 0;
    justify-content:space-around;
    
    `,
  },
  crew: {
    container:`
      width:80%;
      margin: 0 auto;
    `,
    wraper:`
    justify-content:space-between;
    gap:20px;
   @media (max-width:600px){
    flex-direction:column-reverse;
    align-items:center;
    justify-content:center;
   }
    `
  },
  technology: {
    container: `
        width:80%;
        margin-left:auto;
        @media (max-width:1400px){
          width:90%;
        }
        @media (max-width:1200px){
          width:95%;
          margin:0 auto;
        }
        @media (max-width:800px){
          width:100%;
          margin:0 auto;
        }
        
    `,
    wraper: `
        justify-content:space-between;
        @media (max-width:1200px){
            flex-direction:column-reverse;
            padding-top:30px;
            justify-content:center;
            gap:50px;
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
  padding-top:30px;
  ${(props) => variant[props.variant].wraper}

  @media (max-width:600px) {
    padding-top: 20px;
  }
`;

const Header = styled(Heading)`
  padding: 50px 20px;
  padding-bottom: 0px;
  @media (max-width: 600px) {
    padding: 0px 20px;
  }
`;

export { Container, Wraper, Header };
