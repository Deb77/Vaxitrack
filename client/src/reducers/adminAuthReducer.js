import {
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGOUT
} from '../constants/adminAuth';

const token = localStorage.getItem('admin');

const initialState = {
    token,
    isAuthenticated: token ? true : false,
    errors: {},
};

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADMIN_LOGIN_SUCCESS:
            localStorage.setItem('admin', payload.token);
            return {
                ...state,
                token: payload.token,
                isAuthenticated: true,
                errors: {},
            }
        case ADMIN_LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                errors: payload.errors,
            }
        case ADMIN_LOGOUT:
            localStorage.removeItem('admin');
            return {
                token: null,
                isAuthenticated: false,
                errors:{}             
            }
        default: return state;
    }
}

export default authReducer;