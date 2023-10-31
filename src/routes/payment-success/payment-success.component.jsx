import React, { useEffect, useState } from "react";
import {Link, useSearchParams} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import {selectCurrentUser} from "../../store/user/user.selector"
import {handleClearCartOnFS, handleFetchShoppingCartFromFS} from "../../store/cart/cart.thunk"
import { PaymentSuccessContainer } from "./payment-success.styles";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import NotFound from "../../components/not-found/not-found.component";
const PaymentSuccess = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const [searchParams, setSearchParams] = useSearchParams();
    const [showNotFound, setShowNotFound] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const sessionId = searchParams.get("session_id")
    console.log(sessionId)
    console.log(sessionId)
    console.log(sessionId)
    console.log(sessionId)
    const backendEndpoint = import.meta.env.VITE_BACKEND_ENDPOINT;
    useEffect(() => {
        async function notifyPaymentSuccess(){
            try {
                const headers = {
                    'Content-Type': 'application/json'
                }
                const response = await fetch(`${backendEndpoint}/payment/payment-received`,
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
        async function sendVerifySession(){
            try {
                const response = await fetch(`${backendEndpoint}/payment/verify-session?session_id=${sessionId}`)
                if (!response.ok) {
                    setShowNotFound(true);
                }else {
                    setShowNotFound(false);
                }
            }catch(err){
                console.log("something went wrong with verifying session")
                console.log(err);
            }
        }
        async function performMountLogic() {
            await sendVerifySession();
            await notifyPaymentSuccess();
            setIsLoading(false);
        }
        performMountLogic();
    }, [])

    useEffect(() => {
        if (showNotFound === false){
            const userId = currentUser.uid;
            dispatch(handleClearCartOnFS(userId))
            dispatch(handleFetchShoppingCartFromFS(userId))
        }
    }, [showNotFound])

    if (isLoading){
        return (
            <LoadingSpinner/>
        )
    }

    if (showNotFound){
        return (<NotFound/>)
    
    }
    if (!isLoading && !showNotFound){
        return  (<PaymentSuccessContainer>
            <p className="confirmation-message">Payment success, a confirmation email will be sent to you shortly. </p>
            <Link className="back-to-homepage" to="/">Back to homepage</Link>
        </PaymentSuccessContainer>)        
    }
}
export default PaymentSuccess