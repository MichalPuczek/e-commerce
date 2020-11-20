import Axios from "axios";
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_REQUEST_FAIL,
    PRODUCT_LIST_REQUEST_SUCCESS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_REQUEST_FAIL,
    PRODUCT_DETAILS_REQUEST_SUCCESS
} from "../constants/productConstants"

// Action creator and redux thunk
export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    try {
        const { data } = await Axios.get('/api/products');
        dispatch({ type: PRODUCT_LIST_REQUEST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_LIST_REQUEST_FAIL, payload: error.message });
    }
};

export const detailsProduct = (productId) => async (dispatch) => {
    dispatch({
        type: PRODUCT_DETAILS_REQUEST
    });
    try {
        const { data } = await Axios.get(`/api/products/${productId}`);
        dispatch({ type: PRODUCT_DETAILS_REQUEST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_REQUEST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};