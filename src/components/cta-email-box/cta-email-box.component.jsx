import React from "react";
import { EmailInputField, EmailSubmitButton, CTAEmailBoxContainer } from "./cta-email-box.styles";

const CTAEmailBox = () => {
return(    <CTAEmailBoxContainer>
    <form>
        <EmailInputField placeholder="Email address" type="text"/>
        <EmailSubmitButton type="submit">Submit</EmailSubmitButton>
    </form>

</CTAEmailBoxContainer>)
}

export default CTAEmailBox;