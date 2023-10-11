import styled, {keyframes} from "styled-components";

const fadeInOut = keyframes`
    from {opacity: 1;}
    to {opacity: 0;}
`

export const PromptLoginAlertContainer = styled.div`
    position: fixed;
    z-index: 99;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 30px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    border-radius: 8px;
    
    animation: ${fadeInOut} 3s forwards;

`

