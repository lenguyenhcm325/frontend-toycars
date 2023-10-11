import { styled } from "styled-components";


export const FooterContainer = styled.div`
    display: grid; 
    grid-template-columns: repeat(2, 1fr);
    background-color: #d0ebff;

`
export const FooterSectionHeader = styled.p`
    font-weight: 700; 
    font-size: ${(props) => props.fontSize || 24}px;
`