import styled from "styled-components";


const Image = styled.img`

    height: calc(280px + 10vw);
    width:calc(280px + 10vw);
`


const Content = styled.div`
    display: flex;
    flex-direction: column;
    width:400px;
    color:white;
    gap:20px;
    padding:0 20px;
    @media (max-width:600px){
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`
const Footer = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
gap:20px;
text-transform: uppercase;
text-align: center;
padding-top:10px;
border-top:1px solid #383B4B;
margin-top: 30px;
@media (max-width:600px){
    justify-content: center;
}
`


export {Image,Content,Footer}