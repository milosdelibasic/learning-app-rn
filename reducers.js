import {combineReducers} from 'redux';

// import modalReducer from "./modules/modal/reducer";
import generalReducer from './src/modules/general/reducer';
import modalReducer from './src/modules/modal/reducer';
import authReducer from './src/modules/auth/reducer';

const rootReducers = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  general: generalReducer,
});

export default rootReducers;
