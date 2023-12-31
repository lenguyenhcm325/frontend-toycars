import { CART_ACTION_TYPES } from "./cart.types";
import { stringNormalizer } from "../../utils/string-normalizer";
import _ from "lodash";
export const checkItemWithKey = (array, keyToCheck) => {
  return array.find((item) => Object.keys(item).includes(keyToCheck));
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const cartReducer = (state = initialState, action) => {
  if (
    action.type == CART_ACTION_TYPES.ADD_ITEM_TO_CART_ERROR ||
    action.type == CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART_ERROR ||
    action.type == CART_ACTION_TYPES.CLEAR_PRODUCT_FROM_CART_ERROR ||
    action.type == CART_ACTION_TYPES.CLEAR_CART_ERROR ||
    action.type == CART_ACTION_TYPES.UPDATE_PRODUCT_QUANTITY_ERROR ||
    action.type == CART_ACTION_TYPES.FETCH_CART_ERROR
  ) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
  if (action.type == CART_ACTION_TYPES.ADD_ITEM_TO_CART_START) {
    const { model_brand } = action.payload;
    const flattenNameWithoutSpace = stringNormalizer(model_brand);
    const clonedItems = _.cloneDeep(state.items);

    const itemWithKeyToCheck = checkItemWithKey(
      clonedItems,
      flattenNameWithoutSpace
    );

    if (itemWithKeyToCheck) {
      const oldQuantity =
        itemWithKeyToCheck[flattenNameWithoutSpace]["quantity"];

      itemWithKeyToCheck[flattenNameWithoutSpace]["quantity"] =
        parseFloat(oldQuantity) + 1;
    } else if (!itemWithKeyToCheck) {
      clonedItems.push({
        [flattenNameWithoutSpace]: {
          ...action.payload,
          quantity: 1,
        },
      });
    }
    return { ...state, isLoading: true, items: clonedItems };
  }
  if (action.type == CART_ACTION_TYPES.ADD_ITEM_TO_CART_SUCCESS) {
    const productInfo = action.payload;
    console.log(`added (1) ${productInfo.model_brand} item successfully.`);

    return { ...state, isLoading: false };
  }
  if (action.type == CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART_START) {
    const { model_brand } = action.payload;
    const flattenNameWithoutSpace = stringNormalizer(model_brand);
    const clonedItems = _.cloneDeep(state.items);

    const itemWithKeyToCheck = checkItemWithKey(
      clonedItems,
      flattenNameWithoutSpace
    );
    if (
      parseInt(itemWithKeyToCheck[flattenNameWithoutSpace]["quantity"]) == 1
    ) {
      const newWishlist = state.items.filter(
        (item) => item !== itemWithKeyToCheck
      );
      return { ...state, items: clonedItems, isLoading: true };
    } else {
      const oldQuantity =
        itemWithKeyToCheck[flattenNameWithoutSpace]["quantity"];
      itemWithKeyToCheck[flattenNameWithoutSpace]["quantity"] =
        parseInt(oldQuantity) - 1;
      return { ...state, items: clonedItems, isLoading: true };
    }
  }
  if (action.type == CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART_SUCCESS) {
    const productInfo = action.payload;
    console.log(`removed (1) ${productInfo.model_brand} item successfully.`);

    return { ...state, isLoading: false };
  }
  if (action.type == CART_ACTION_TYPES.CLEAR_PRODUCT_FROM_CART_START) {
    const { model_brand } = action.payload;
    const flattenNameWithoutSpace = stringNormalizer(model_brand);
    const newWishlist = state.items.filter(
      (item) => !Object.keys(item).includes(flattenNameWithoutSpace)
    );
    return { ...state, isLoading: true, items: newWishlist };
  }
  if (action.type == CART_ACTION_TYPES.CLEAR_PRODUCT_FROM_CART_SUCCESS) {
    const productInfo = action.payload;
    console.log(`cleared product ${productInfo.model_brand} successfully.`);
    return { ...state, isLoading: false };
  }
  if (action.type == CART_ACTION_TYPES.CLEAR_CART_START) {
    return {
      ...initialState,
      isLoading: true,
    };
  }
  if (action.type == CART_ACTION_TYPES.CLEAR_CART_SUCCESS) {
    console.log("cleared all items inside the shopping cart successfully");
    return {
      ...initialState,
    };
  }
  if (action.type == CART_ACTION_TYPES.UPDATE_PRODUCT_QUANTITY_START) {
    const { model_brand, quantity } = action.payload;

    const flattenNameWithoutSpace = stringNormalizer(model_brand);
    const itemWithKeyToCheck = checkItemWithKey(
      state.items,
      flattenNameWithoutSpace
    );
    itemWithKeyToCheck[flattenNameWithoutSpace]["quantity"] = quantity;
    return { ...state, isLoading: true };
  }
  if (action.type == CART_ACTION_TYPES.UPDATE_PRODUCT_QUANTITY_SUCCESS) {
    const { model_brand, quantity } = action.payload;
    console.log(
      `updated the quantity of ${model_brand} to ${quantity} successfully.`
    );
    return { ...state, isLoading: false };
  }
  if (action.type == CART_ACTION_TYPES.FETCH_CART_START) {
    console.log("fetch cart start");
    return { ...state, isLoading: true };
  }
  if (action.type == CART_ACTION_TYPES.FETCH_CART_SUCCESS) {
    console.log("fetch cart success");
    return { ...state, isLoading: false, items: action.payload };
  }
  if (action.type == CART_ACTION_TYPES.CLEAR_CART_LOCAL) {
    return { initialState };
  }
  return { ...state };
};
