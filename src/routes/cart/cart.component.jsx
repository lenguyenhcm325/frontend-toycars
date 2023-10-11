import React, {useState} from "react";
import { CartContainer } from "./cart.styles";
import CartCheckout from "../../components/cart-checkout/cart-checkout.component";
import CartItemsBlock from "../../components/cart-items-block/cart-items-block.component";
const Cart  = () => {
    const [deliveryCost, setDeliveryCost] = useState("-Please select delivery option-");
    const handlePassingDeliveryCost = (cost) => {
        setDeliveryCost(cost);
    }  

    return (
        <CartContainer>
            <CartItemsBlock onBubble={handlePassingDeliveryCost}/>
            <CartCheckout deliveryCost={deliveryCost}/>
        </CartContainer>
    )
}

export default Cart;