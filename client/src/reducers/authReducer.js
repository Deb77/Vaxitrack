import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../constants/auth';

const token = localStorage.getItem('token');

const initialState = {
    token,
    user: localStorage.getItem('user'),
    isAuthenticated: token ? true : false,
    loginErrors: {},
    singupErrors: {}
};

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGNUP_SUCCESS:
            localStorage.setItem('token', payload.token);
            localStorage.setItem('user', payload.user);
            return {
                ...state,
                token: payload.token,
                user: payload.user,
                isAuthenticated: true,
                signupErrors: {}
            }
        case SIGNUP_FAIL:
            return {
                ...state,
                isAuthenticated:false,
                signupErrors: payload.errors
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            localStorage.setItem('user', payload.user);
            return {
                ...state,
                token: payload.token,
                user: payload.user,
                isAuthenticated: true,
                loginErrors: {},
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                loginErrors: payload.errors,
            }
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                token: null,
                user: null,
                isAuthenticated: false,
                loginErrors: {},
                signupErrors: {}
            }
        default: return state;
    }
}

export default authReducer;