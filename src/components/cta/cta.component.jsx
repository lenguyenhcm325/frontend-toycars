import React from "react";
import CTAEmailBox from "../cta-email-box/cta-email-box.component";
import { FooterSectionHeader } from "../../routes/footer/footer.styles";
const CTA = () => {
    return(
        <div>
            <FooterSectionHeader fontSize={36}>Newsletter</FooterSectionHeader>
            <p>Want to know what we're up to? Sign up for the newsletter and join our tribe</p>
            <CTAEmailBox/>

        </div>

    )
}



export default CTA;