import { createSelector } from "reselect";
export const selectWishlist = (state) => state.wishlist.wishlist;

export const selectWishlistedModelNames = createSelector(
  [selectWishlist],
  (wishlist) => {
    if (wishlist) {
      const modelNames = wishlist.map((modelObject) => {
        const modelInfo = modelObject[Object.keys(modelObject)[0]];
        return modelInfo.model_brand;
      });
      return modelNames;
    } else {
      return [];
    }
  }
);
