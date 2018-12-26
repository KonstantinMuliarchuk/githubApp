import {combineReducers} from 'redux'
import auth from './auth.reducer';
import layout from './layout.reducers';
import home from './home.reducer';

export default combineReducers({
    auth, layout, home
})