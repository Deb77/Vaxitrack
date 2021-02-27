import {
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGOUT
} from '../constants/adminAuth';
import { adminService } from '../services/adminService';

export const login = body => dispatch => 
    adminService.post('login', body)
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