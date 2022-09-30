import styled from "styled-components";


const variant = {
    s1:'font-size:28px;text-transform:uppercase;',
    s2:'font-size:16px; letter-spacing:2.35px;text-transform:uppercase;',
    navText:'font-size:16px; letter-spacing:2.7px',
    body:'font-size:18px'

}


const SubHeading = styled.p`
    color:white;
    ${props => variant[props.variant]}
`

export default SubHeading;