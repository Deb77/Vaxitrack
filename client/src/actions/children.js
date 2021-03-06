import {
    GET_ALL_CHILDREN,
    SET_SELECTED_CHILD,
    SET_VACCINE_LIST,
    DELETE_CHILD_RECORD,
} from '../constants/children';
import { CREATE_MESSAGE } from '../constants/messages';
import { CREATE_ERROR, RESET_ERRORS } from '../constants/errors'
import { childService } from '../services/childService';
import { vaccineService } from '../services/vaccineService';

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
                type: CREATE_ERROR,
                payload: errors
            })
        })     

export const fetchAllChildren = () => dispatch =>
    childService.get('allchildren')
        .then(res => {
            dispatch({
                type: GET_ALL_CHILDREN,
                payload: res.data
            })
        }
        )
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: CREATE_ERROR,
                payload: errors
            })
        })  
        
export const fetchVaccines = body => dispatch =>
    vaccineService.post('', body)
        .then(res => {
            dispatch({
                type: SET_VACCINE_LIST,
                payload: res.data.vaccines
            })
            dispatch({
                type: RESET_ERRORS
            })
        })
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: CREATE_ERROR,
                payload: errors
            })
        }) 
    
export const setSelected = body => dispatch =>
    dispatch({
        type: SET_SELECTED_CHILD,
        payload: body
    })

export const addChild = body => dispatch => 
    childService.post('', body)
        .then(res => {
            dispatch({
                type: CREATE_MESSAGE,
                payload: res.data
            })
            dispatch({
                type: RESET_ERRORS
            })
        })
        .catch(err => {
            const errors = {
                msg: err.response.data.errors,
                status: err.response.status
            }
            dispatch({
                type: CREATE_ERROR,
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
                type: CREATE_ERROR,
                payload: errors
            })
        })