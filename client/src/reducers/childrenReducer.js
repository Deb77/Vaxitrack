import {
    GET_ALL_CHILDREN,
    SET_VACCINE_LIST,
    SET_SELECTED_CHILD
} from '../constants/children';

const initialState = {
    records: [],
    selected: '',
    vaccines: []
}

const childrenReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_CHILDREN:
            return {
                ...state,
                records: payload,
            }
        case SET_VACCINE_LIST:
            return {
                ...state,
                vaccines: payload
            }
        case SET_SELECTED_CHILD:
            return {
                ...state,
                selected: payload
            }
        default: return state;
    }
}

export default childrenReducer