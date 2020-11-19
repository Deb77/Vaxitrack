import {
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGOUT
} from '../constants/adminAuth';
import { userService } from '../services/userService';

export const login = body => dispatch => 
    userService.post('doctor/login', body)
        .then(res =>
            dispatch({
                type: ADMIN_LOGIN_SUCCESS,
                payload: res.data
            })
        )
        .catch(err => 
            dispatch({
                type: ADMIN_LOGIN_FAIL,
                payload: err.response.data,
            })
        );

export const logout = () => dispatch => dispatch({ type: ADMIN_LOGOUT });