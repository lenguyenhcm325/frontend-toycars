import { BRANDS_ACTION_TYPES } from "./brand.types"
const initialState = {
    brands: [],
    isLoading: false, 
    error: null
}

export const brandsReducer = (state=initialState, action) => {
    if (action.type == BRANDS_ACTION_TYPES.FETCH_BRANDS_START) {
        return {
            ...state, isLoading: true
        }
    }
    if (action.type == BRANDS_ACTION_TYPES.FETCH_BRANDS_ERROR){
        return {
            ...state, error: action.payload
        }
    }
    if (action.type == BRANDS_ACTION_TYPES.FETCH_BRANDS_SUCCESS){
        const {payload} = action;
        return {
            ...state, brands: payload, isLoading: false
        }
    }
    return state;
}