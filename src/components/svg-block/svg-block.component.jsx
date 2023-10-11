import React from "react";
import { SVGContainer, SVGasImage } from "./svg-block.styles";


const SVGBlock = ({src, text, onClick}) => {
return (
    <SVGContainer>
            <SVGasImage onClick={onClick} src={src} alt="an SVG" />
            <span style={{display: "block"}}>{text}</span>
            

    </SVGContainer>

)




}

export default SVGBlock;