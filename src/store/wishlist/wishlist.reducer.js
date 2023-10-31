import { WISHLIST_ACTION_TYPES } from "./wishlist.types";
import { stringNormalizer } from "../../utils/string-normalizer";
import _, { __ } from "lodash";

const initialState = {
  wishlist: [],
  error: null,
  isLoading: false,
};
export const wishlistReducer = (state = initialState, action) => {
  let tempWishlist;
  if (action.type == WISHLIST_ACTION_TYPES.FETCH_WISHLIST_START) {
    return { ...state, isLoading: true };
  }
  if (action.type == WISHLIST_ACTION_TYPES.FETCH_WISHLIST_ERROR) {
    return { ...state, isLoading: false, error: action.payload };
  }
  if (action.type == WISHLIST_ACTION_TYPES.FETCH_WISHLIST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      error: null,
      wishlist: action.payload,
    };
  }
  if (action.type == WISHLIST_ACTION_TYPES.TOGGLE_WISHLIST_START) {
    const { model_brand, brand_name, description, image_url, price } =
      action.payload;
    const flattenModelName = stringNormalizer(model_brand);
    let wishlistDeepCopy = _.cloneDeep(state.wishlist);
    if (
      state.wishlist.some((model) => model.hasOwnProperty(flattenModelName))
    ) {
      wishlistDeepCopy = state.wishlist.filter((model) => {
        return !(flattenModelName in model);
      });
    } else {
      wishlistDeepCopy.push({
        [flattenModelName]: {
          model_brand,
          description,
          price,
          image_url,
        },
      });
    }
    return { ...state, wishlist: wishlistDeepCopy };
  }
  if (action.type == WISHLIST_ACTION_TYPES.TOGGLE_WISHLIST_ERROR) {
    return { ...state, error: action.payload, isLoading: false };
  }
  if (action.type == WISHLIST_ACTION_TYPES.CLEAR_WISHLIST_LOCAL) {
    return { initialState };
  } else {
    return { ...state };
  }
};
