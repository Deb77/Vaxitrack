import {
    GET_ALL_CHILDREN,
    ADD_NEW_CHILD,
    UPDATE_CHILD_INFO,
    DELETE_CHILD_RECORD,
} from '../constants/children';
import { GET_ERRORS } from '../constants/errors'
import { childService } from '../services/childService';

export const fetchChildren = body => dispatch =>
    childService.post('children', body)
        .then(res =>
            dispatch({
                type: GET_ALL_CHILDREN,
                payload: res.data
            })
        )
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            })
        })     

export const addChild = body => dispatch => 
    childService.post('', body)
        .then(res => 
            dispatch({
                type: ADD_NEW_CHILD,
                payload: res.data
            })
        )
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            })
        })
        
export const updateChild = body => dispatch => 
    childService.put(`${body.id}`)
        .then(res =>
            dispatch({
                type: UPDATE_CHILD_INFO,
                payload: res.data
            })
        )
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            })
        })
    
export const deleteChild = body => dispatch => 
    childService.put(`${body.id}`)
        .then(res =>
            dispatch({
                type: DELETE_CHILD_RECORD,
                payload: res.data
            })
        )
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            })
        })