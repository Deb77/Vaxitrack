import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../constants/auth';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: true,
    errors: {},
    user: null,
};

const authReducer = (state = initialState, action) =>  {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true,
                errors: {},
            }
        case SIGNUP_FAIL:
            return {
                ...state,
                isAuthenticated:false,
                errors: action.payload.errors
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true,
                errors:{}
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                errors: action.payload.errors,
            }
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                token: null,
                isAuthenticated: false,
                errors:{},
                user: null                
            }
        default: return state;
    }
}

export default authReducer;