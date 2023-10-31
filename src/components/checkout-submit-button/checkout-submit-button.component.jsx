
import React from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from "react-redux";
import { CheckoutSubmitButtonContainer } from './checkout-submit-button.styles';
import { selectCheckoutItemsReqBody } from '../../store/cart/cart.selector';
function CheckoutSubmitButton({deliveryCost}) {
  const dispatch = useDispatch();
  let shippingObject; 
  if (deliveryCost.includes("3.99")){
    shippingObject = {
      standarddelivery: 1
    }
  }
  else if (deliveryCost.includes("7.99")){
    shippingObject = {
      expressdelivery: 1
    }
  }
  const checkoutItemsReqBody = useSelector(selectCheckoutItemsReqBody);
  let reqBody;
  if (shippingObject){
    reqBody = [...checkoutItemsReqBody, shippingObject]
  }else {
    reqBody = checkoutItemsReqBody
  }
  const backendEndpoint = import.meta.env.VITE_BACKEND_ENDPOINT;
  const handleSubmit = async () => {
    try {
      const response = await fetch(`${backendEndpoint}/payment/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const body = await response.json();
      window.location.href = body.url
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error.message);
    }
  };
  return (
    <CheckoutSubmitButtonContainer>
    <button onClick={handleSubmit} className="checkout-button">Checkout</button>
    </CheckoutSubmitButtonContainer> 
  );
}

export default CheckoutSubmitButton;
