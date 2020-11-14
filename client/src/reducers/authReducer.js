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
                errors: {},
                isAuthenticated: true
            }
        case SIGNUP_FAIL:
            return {
                ...state,
                errors: action.payload.errors,
                isAuthenticated:false
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                errors:{},
                token: action.payload.token,
                isAuthenticated: true
            }
        case LOGIN_FAIL:
            return {
                ...state,
                errors: action.payload.errors,
                isAuthenticated: false
            }
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                user: null                
            }
        default: return state;
    }
}

export default authReducer;