import {
  fetchBrandsStart,
  fetchBrandsError,
  fetchBrandsSuccess,
} from "../store/brand/brand.action";

export const fetchAllBrands = () => async (dispatch) => {
  try {
    dispatch(fetchBrandsStart());
    const response = await fetch("http://localhost:3000/api/cars");
    if (!response.ok) {
      dispatch(fetchBrandsError(new Error("Network error")));
    }

    const data = await response.json();
    dispatch(fetchBrandsSuccess(data));
  } catch (error) {
    dispatch(fetchBrandsError(error));
  }
};
