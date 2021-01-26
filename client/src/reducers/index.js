import { combineReducers } from "redux";
import authReducer from './authReducer';
import childrenReducer from './childrenReducer';
import messagesReducer from './messagesReducer';
import errorsReducer from './errorsReducer';

export default combineReducers({
    auth: authReducer,
    children: childrenReducer,
    messages: messagesReducer,
    errors: errorsReducer
});


