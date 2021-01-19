import { combineReducers } from "redux";
import authReducer from './authReducer';
import childrenReducer from './childrenReducer';

export default combineReducers({
    auth: authReducer,
    children: childrenReducer
});


