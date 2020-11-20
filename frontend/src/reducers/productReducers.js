const {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_REQUEST_SUCCESS,
    PRODUCT_LIST_REQUEST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_REQUEST_SUCCESS,
    PRODUCT_DETAILS_REQUEST_FAIL,
} = require("../constants/productConstants");

export const productListReducer = (state = { loading: true, products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {
                loading: true
            };
        case PRODUCT_LIST_REQUEST_SUCCESS:
            return {
                loading: false,
                products: action.payload
            };
        case PRODUCT_LIST_REQUEST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export const productDetailsReducer = (state = { productId: {}, loading: true }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                loading: true
            };
        case PRODUCT_DETAILS_REQUEST_SUCCESS:
            return {
                loading: false,
                product: action.payload
            };
        case PRODUCT_DETAILS_REQUEST_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};