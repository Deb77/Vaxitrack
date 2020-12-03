import {
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGOUT
} from '../constants/adminAuth';

const adminToken = localStorage.getItem('admin');

const initialState = {
    adminToken,
    adminUser: localStorage.getItem('doctor'),
    isAuthenticated: adminToken ? true : false,
    errors: {},
};

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADMIN_LOGIN_SUCCESS:
            localStorage.setItem('admin', payload.token);
            localStorage.setItem('doctor', payload.user);
            return {
                ...state,
                token: payload.token,
                user: payload.user,
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
                user: null,
                isAuthenticated: false,
                errors:{}             
            }
        default: return state;
    }
}

export default authReducer;