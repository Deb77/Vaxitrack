import { combineReducers } from "redux";
import authReducer from './authReducer';
import adminAuthReducer from './adminAuthReducer';
import childrenReducer from './childrenReducer';
import messagesReducer from './messagesReducer';
import errorsReducer from './errorsReducer';

export default combineReducers({
    auth: authReducer,
    adminAuth: adminAuthReducer,
    children: childrenReducer,
    messages: messagesReducer,
    errors: errorsReducer
});


