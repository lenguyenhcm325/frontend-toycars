import React, { useEffect } from "react";
import {Link} from "react-router-dom"
import { PaymentSuccessContainer } from "./payment-success.styles";

const PaymentSuccess = () => {
    useEffect(() => {
        async function notifyPaymentSuccess(){
            try {
                const headers = {
                    'Content-Type': 'application/json'
                }
                const response = await fetch("http://localhost:3000/payment/payment-received",
                {
                    method: "POST",
                    headers
                });
                if (!response.ok){
                    throw new Error("Network response was not ok");

                }
                const result = await response.json();

            }catch(error){
                console.error("Error:", error)
            }
        }
        notifyPaymentSuccess();
    }, [])

    return  (<PaymentSuccessContainer>
        <p className="confirmation-message">Payment success, a confirmation email will be sent to you shortly. </p>
        <Link className="back-to-homepage" to="/">Back to homepage</Link>
    </PaymentSuccessContainer>)
}

export default PaymentSuccess