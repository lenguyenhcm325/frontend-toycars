import React from "react";
import { FooterContainer } from "./footer.styles";
import FooterInfoBox from "../../components/footer-info-box/footer-info-box.component";
import CTA from "../../components/cta/cta.component";
const Footer = () => {
    return (
        <FooterContainer>
            <CTA/>
            <FooterInfoBox/>
        </FooterContainer>
    )
}


export default Footer; 
