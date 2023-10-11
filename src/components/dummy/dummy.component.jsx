import React, {useEffect} from "react";
import { useDispatch} from "react-redux";
import {handleFetchWishlistFromFS} from "../../store/wishlist/wishlist.thunk"
import { handleFetchShoppingCartFromFS } from "../../store/cart/cart.thunk";
const Dummy = ({currentUser}) => {
    const dispatch = useDispatch(); 
    // const currentUser = useSelector(selectCurrentUser);
    useEffect(() => {
        if (currentUser){
            dispatch(handleFetchWishlistFromFS(currentUser.uid))
            dispatch(handleFetchShoppingCartFromFS(currentUser.uid))
        }
    }, [])

    return (
        <div></div>
    )
}

export default Dummy;