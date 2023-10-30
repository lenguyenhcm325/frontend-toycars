import React from "react";
import { FooterInfoBoxContainer } from "./footer-info-box.styles";
import { FooterSectionHeader } from "../../routes/footer/footer.styles";
const FooterInfoBox = () => {

return (
    <FooterInfoBoxContainer>
        <div>
            <FooterSectionHeader>Schedule</FooterSectionHeader>
            <p>9am &ndash; 7pm</p>
            <p></p>
            <p></p>
        </div>
        <div >
            <FooterSectionHeader>Follow us</FooterSectionHeader>
            <p><a href="/">Facebook</a></p>
            <p><a href="/">Instagram</a></p>
            <p><a href="/">YouTube</a></p>

        </div>

        <div>
            <FooterSectionHeader>Address</FooterSectionHeader>
            <p>Musterstraße 54</p>
            <p>12345 Musterstadt</p>
            

        </div>
        <div>
            <FooterSectionHeader>Contact</FooterSectionHeader>
            <p>T: <a href="/">+49 3012 345 678</a></p>
            <p>E: <a href="/">max.mustermann@mail.de</a></p>

        </div>

    </FooterInfoBoxContainer>
    )
}
export default FooterInfoBox;