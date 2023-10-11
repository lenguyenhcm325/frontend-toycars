 import { styled } from "styled-components";


 export const CarouselSlideContainer = styled.div`
    width: 28%; 
    position: relative;
 `



 export const CarouselImage = styled.div`
    background-image: url("${(props) => props.url}");
    background-size: cover;
    cursor: pointer;
    
    
    width: 100%;
    padding-bottom: calc(2/3 * 100%);
 `