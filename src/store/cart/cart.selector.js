export const selectCartItems = (state) => state.cart.items;

export const calculateSubTotal = (state) => {
  const cartItems = selectCartItems(state);

  let subTotal = cartItems.reduce((accumulator, currentValue) => {
    const flattenNameWithoutSpace = Object.keys(currentValue)[0];
    const { quantity, price } = currentValue[flattenNameWithoutSpace];
    const priceWithoutSymbol = price.replace("$", "");
    return (
      accumulator +
      parseFloat(priceWithoutSymbol).toFixed(2) * parseInt(quantity)
    );
  }, 0);
  return "€" + parseFloat(subTotal).toFixed(2);
};

export const selectCheckoutItemsReqBody = (state) => {
  const cartItems = selectCartItems(state);
  let result = [];
  cartItems.forEach((productInfoWithQuantity) => {
    const flattenNameWithoutSpace = Object.keys(productInfoWithQuantity)[0];
    const productQuantity =
      productInfoWithQuantity[flattenNameWithoutSpace]["quantity"];
    result.push({
      [flattenNameWithoutSpace]: productQuantity,
    });
  });
  return result;
};
