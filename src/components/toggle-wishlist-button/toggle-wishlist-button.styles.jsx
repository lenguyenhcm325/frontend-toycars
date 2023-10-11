
import styled from "styled-components"

export const ToggleWishlistButtonContainer = styled.div`
position: absolute; 
cursor: pointer;
top: 0px; 
right: 0px;
width: 24px; 
height: 24px;
background-image: url("https://toycars-img.s3.eu-central-1.amazonaws.com/svg/heart-svg.svg");
${(props) => {
   if (props.fill){
      
      return 'background-image: url("https://toycars-img.s3.eu-central-1.amazonaws.com/svg/heart-red-svg.svg");'
   }else {
      return 'background-image: url("https://toycars-img.s3.eu-central-1.amazonaws.com/svg/heart-svg.svg");'
   }
} }
`