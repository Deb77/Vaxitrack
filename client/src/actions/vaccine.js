import { vaccineService } from '../services/vaccineService';
import { CREATE_MESSAGE } from '../constants/messages';
import { CREATE_ERROR } from '../constants/errors';

export const updateVaccine = (id, body) => dispatch => {
    vaccineService.put(id, body)
        .then(res =>
            dispatch({
                type: CREATE_MESSAGE,
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
}