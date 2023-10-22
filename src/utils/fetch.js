import {
  fetchBrandsStart,
  fetchBrandsError,
  fetchBrandsSuccess,
} from "../store/brand/brand.action";

export const fetchAllBrands = () => async (dispatch) => {
  const backendEndpoint = import.meta.env.VITE_BACKEND_ENDPOINT;
  try {
    dispatch(fetchBrandsStart());
    const response = await fetch(`${backendEndpoint}/api/cars`);
    if (!response.ok) {
      dispatch(fetchBrandsError(new Error("Network error")));
    }

    const data = await response.json();
    dispatch(fetchBrandsSuccess(data));
  } catch (error) {
    dispatch(fetchBrandsError(error));
  }
};
