import {
    GET_ALL_CHILDREN,
} from '../constants/children';

const initialState = {
    records: []
}

const childrenReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_CHILDREN:
            return {
                ...state,
                records: payload,
            }
        default: return state;
    }
}

export default childrenReducer