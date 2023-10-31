import React, {useState} from "react";
import { SVGasImage } from "../svg-block/svg-block.styles";
import { CartQuantityAdjustContainer } from "./cart-quantity-adjust.styles";
import { handleAddItemToCartOnFS, handleRemoveItemFromCartFromFS, handleClearProductFromCartOnFS, handleUpdateProductQuantityOnFS } from "../../store/cart/cart.thunk";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
const CartQuantityAdjust = ({model_brand, image_url, description ,price, quantity}) => {
    const dispatch = useDispatch(); 
    const currentUser = useSelector(selectCurrentUser);
    const [displayQuantity, setDisplayQuantity] = useState(quantity);
    const handleIncreaseQuantity = () => {
        if (displayQuantity > 98){
            return
        }else {
            setDisplayQuantity(displayQuantity + 1);
            dispatch(handleAddItemToCartOnFS(currentUser.uid, {
                model_brand, image_url, description ,price
            }))
        }
    }
    const handleClearProduct = () => {
        dispatch(handleClearProductFromCartOnFS(currentUser.uid, {
            model_brand, image_url, description ,price
        }))
    }
    const handleDecreaseQuantity = () => {
        if (displayQuantity <= 1){
            return;
        }else {
            setDisplayQuantity(displayQuantity - 1);
            dispatch(handleRemoveItemFromCartFromFS(currentUser.uid, {
                model_brand, image_url, description ,price
            }))
        }
    }


    const handleChangeQuantity = (value) => {
        let valueToPick; 
        if (value > 99){
            valueToPick = 99
        }else if (value <= 0){
            valueToPick = 1
        }else {
            valueToPick = value
        }
        setDisplayQuantity(valueToPick);
        dispatch(handleUpdateProductQuantityOnFS(currentUser.uid, {model_brand, image_url, description ,price, quantity:valueToPick}));
    }

return (<CartQuantityAdjustContainer>
    <SVGasImage src="https://toycars-img.s3.eu-central-1.amazonaws.com/svg/plus-svg.svg" 
    onClick={handleIncreaseQuantity}
    />
    <input
      type="number"
      value={displayQuantity}
      onChange={(e) => {        
        handleChangeQuantity(e.target.value)
      }}
    />
    <SVGasImage src="https://toycars-img.s3.eu-central-1.amazonaws.com/svg/minus-svg.svg"
    onClick={handleDecreaseQuantity}/>
    <SVGasImage className="bin-svg" src="https://toycars-img.s3.eu-central-1.amazonaws.com/svg/trash-2-svg.svg"
    onClick={handleClearProduct}/>
</CartQuantityAdjustContainer>)
}

export default CartQuantityAdjust