import React, { useEffect , useState} from "react";
import { Navigate } from "react-router-dom";
import {clearCartLocal} from "../../store/cart/cart.action";
import {useDispatch} from "react-redux"
import {clearWishlistLocal} from "../../store/wishlist/wishlist.action";
const SignedOut = () => {
    const [timeRemain, setTimeRemain] = useState(5); 
    const dispatch = useDispatch();
    const decrementTime = (time) => {
        if (timeRemain > 0) {
            setTimeRemain(time)
        }
    }
    useEffect(() => {
        dispatch(clearCartLocal())
        dispatch(clearWishlistLocal())
    }, [])

    useEffect(() => {
        const interval = setInterval(() => decrementTime(timeRemain - 1), 1000);
        return () => clearInterval(interval)
    },[timeRemain])
    useEffect(() => {
        function flushWishlistAndCart() {
                
        }

    })
return (
    <div>
        {
            timeRemain == 0 && <Navigate to="/" replace={true}/>
        }
        <h2>You've signed out</h2>
        <h2>We will redirect you back to the homepage in {timeRemain} seconds</h2>



    </div>
)


}


export default SignedOut;