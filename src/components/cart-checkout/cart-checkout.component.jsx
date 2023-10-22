import React , {useState}from "react";
import { useSelector } from "react-redux";
import { calculateSubTotal } from "../../store/cart/cart.selector";
import CheckoutSubmitButton from "../checkout-submit-button/checkout-submit-button.component";
import { CartCheckoutContainer } from "./cart-checkout.styles";
const CartCheckout = ({deliveryCost}) => {
    const subTotal = useSelector(calculateSubTotal);
    const calculateTotalCost = (cost1, cost2) => {
        let currencySymbol1 = cost1[0]
        let currencySymbol2 = cost2[0]
        if (currencySymbol1 !== currencySymbol2){
            return "-Total price will be displayed here-"
        }
        let value1 = parseFloat(cost1.substr(1));
        let value2 = parseFloat(cost2.substr(1));
        value1.length? value1 : 0;
        value2.length? value2 : 0;   
        let sum = value1 + value2; 
        return currencySymbol1 + sum.toFixed(2);    
    }
    return (
        <CartCheckoutContainer>
            <h2>TOTAL</h2>
            <div className="sub-total-delivery">
                <div className="sub-total">
                    <p className="title">SUB-TOTAL</p>
                    <p>{subTotal}</p>
                </div>
                <div className="delivery">
                    <p className="title">DELIVERY</p>
                    <p>{deliveryCost}</p>
                </div>
                <div className="delivery">
                    <p className="title">TOTAL PRICE</p>
                    <p>{calculateTotalCost(subTotal, deliveryCost)}</p>
                </div>
                <CheckoutSubmitButton/>
            </div>

        </CartCheckoutContainer>
    )
}

export default CartCheckout; 
