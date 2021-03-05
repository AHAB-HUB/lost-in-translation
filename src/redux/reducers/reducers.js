import { combineReducers } from 'redux';
import usernameReducer from './usernameReducer';
import isLoggedReducer from './isLoggedReducer';

const allReducers = combineReducers({
    username: usernameReducer,
    isLogged: isLoggedReducer
});

export default allReducers