import { combineReducers } from 'redux';

import HomeReducer from './pages/Home/reducer';


export default combineReducers({
    home:HomeReducer
})