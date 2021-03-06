import {

    USER_SIGNIN_REQUEST,
    USER_SIGNIN_REQUEST_SUCCESS,
    USER_SIGNIN_REQUEST_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_REQUEST_SUCCESS,
    USER_REGISTER_REQUEST_FAIL,
    USER_SIGNOUT,
} from '../constants/userConstants';

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true };
        case USER_REGISTER_REQUEST_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_REGISTER_REQUEST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};


export const userSigninReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true };
        case USER_SIGNIN_REQUEST_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_SIGNIN_REQUEST_FAIL:
            return { loading: false, error: action.payload };
        case USER_SIGNOUT:
            return {};
        default:
            return state;
    }
};