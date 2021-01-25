import { combineReducers } from "redux";
import authReducer from './authReducer';
import childrenReducer from './childrenReducer';
import errorsReducer from './errorsReducer';

export default combineReducers({
    auth: authReducer,
    children: childrenReducer,
    errors: errorsReducer
});


