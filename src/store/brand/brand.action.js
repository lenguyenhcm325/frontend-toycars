import { BRANDS_ACTION_TYPES } from "./brand.types";


export const fetchBrandsStart = () => 
    ({
        type: BRANDS_ACTION_TYPES.FETCH_BRANDS_START
    })


export const fetchBrandsError = (error) => (
    {
        type: BRANDS_ACTION_TYPES.FETCH_BRANDS_ERROR,
        payload: error
    }
)

export const fetchBrandsSuccess = (data) => (
    {
       type: BRANDS_ACTION_TYPES.FETCH_BRANDS_SUCCESS,
       payload: data
    }
)
