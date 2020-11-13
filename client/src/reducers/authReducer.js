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
    user: null,
};

const authReducer = (state = initialState, action) =>  {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true
            }
        case SIGNUP_FAIL:
            return state;
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true
            }
        case LOGIN_FAIL:
            return state;
        case LOGOUT:
            localStorage.removeItem('token');
            break;
        default: return state;
    }
}

export default authReducer;