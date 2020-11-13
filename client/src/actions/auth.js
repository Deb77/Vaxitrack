import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../constants/auth';
import { userService } from '../services/userService';

export const register = body => dispatch => {
    userService.post('parent/signup', body)
        .then(res => dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            console.log(err);
            dispatch({
                type: SIGNUP_FAIL,
            })
        });
}

export const login = body => dispatch => {
    userService.post('parent/login', body)
        .then(res => {
            //console.log(res)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            //console.log(err);
            dispatch({
                type: LOGIN_FAIL,
            })
        });
}

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT })
}