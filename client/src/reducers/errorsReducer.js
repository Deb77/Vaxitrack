import { GET_ERRORS } from '../constants/errors';

const initialState = {
    msg: "",
    status: null
}

const errorsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ERRORS:
            return {
                msg: payload.msg,
                status: payload.status
            }
        default:
            return state;
    }
}

export default errorsReducer;