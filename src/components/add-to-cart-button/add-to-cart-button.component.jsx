import React, {useState, useEffect, useRef, Fragment} from "react";
import PromptLoginAlert from "../prompt-login-alert/prompt-login-alert.component";
import { AddToCartButtonContainer } from "./add-to-cart-button.styles";
import { SVGasImage } from "../svg-block/svg-block.styles";
import { handleAddItemToCartOnFS } from "../../store/cart/cart.thunk";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useDispatch, useSelector } from "react-redux";
const AddToCartButton = ({image_url, model_brand, price, description}) => {
    const currentUser = useSelector(selectCurrentUser);
    const timerRef = useRef(null);
    const [showPromptLogin, setShowPromptLogin] = useState(false);
    const dispatch = useDispatch(); 

    const handleClick = () => {
        {
            if (!currentUser){
                if (timerRef.current){
                    clearTimeout(timerRef.current)
                }
                setShowPromptLogin(true);
                timerRef.current = setTimeout(() => {
                    setShowPromptLogin(false)
                }, 2000)
            }
            else {
                dispatch(handleAddItemToCartOnFS(currentUser.uid, {image_url, model_brand, price, description}))
            }
        }
    }

    useEffect(() => {
        return () => {
            if (timerRef.current){
                clearTimeout(timerRef.current)
            }
        }
    }, [])

    return (
        <Fragment>
            {
                showPromptLogin && (<PromptLoginAlert/>)
            }

            <AddToCartButtonContainer onClick={handleClick}>
                <SVGasImage src="https://toycars-img.s3.eu-central-1.amazonaws.com/svg/plus-svg.svg" alt="" /> <span>Add to cart</span>

            </AddToCartButtonContainer>
        </Fragment>
    )

}

export default AddToCartButton

// () => dispatch(handleAddItemToCartOnFS(currentUser.uid, {image_url, model_brand, price, description}))