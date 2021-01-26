import { CREATE_ERROR, RESET_ERRORS } from '../constants/errors';

const initialState = {
    msg: "",
    status: null
}

const errorsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_ERROR:
            return {
                msg: payload.msg,
                status: payload.status
            };
        case RESET_ERRORS:
            return initialState;
        default:
            return state;
    }
}

export default errorsReducer;