import { styled } from "styled-components";


export const FooterContainer = styled.div`
    display: grid; 
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    background-color: #a5d8ff;
    padding: 36px 32px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`
export const FooterSectionHeader = styled.p`
    font-weight: 700; 
    margin: 0;
    padding: 0;
    margin-top: 20px;
    font-size: ${(props) => props.fontSize || 24}px;
`