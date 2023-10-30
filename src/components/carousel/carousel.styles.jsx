import { styled } from "styled-components";



import {ReactComponent as ArrowLeftSVG} from "../../assets/arrow-left-svg.svg"
import {ReactComponent as ArrowRightSVG} from "../../assets/arrow-right-svg.svg"


export const Dot = styled.div`
    width: 16px;
    cursor: pointer;
    height: 16px; 
    border-radius: 8px;
    background-color: ${(props) => props.color || "#d0ebff"};

`

export const CarouselContainer = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`

export const ArrowLeft = styled(ArrowLeftSVG)`
    width: 24px;
    height: 24px;
    cursor: pointer;
    
`

export const ArrowRight = styled(ArrowRightSVG)`
    width: 24px;
    height: 24px;
    cursor: pointer;
    
`