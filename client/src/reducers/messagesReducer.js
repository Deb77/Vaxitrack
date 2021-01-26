import { CREATE_MESSAGE, RESET_MESSAGES } from '../constants/messages';

const initialState = ''

const messagesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_MESSAGE:
            return payload;
        case RESET_MESSAGES:
            return initialState
        default:
            return state;
    }
}

export default messagesReducer;