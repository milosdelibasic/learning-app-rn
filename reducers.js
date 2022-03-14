import { combineReducers } from "redux";

// import modalReducer from "./modules/modal/reducer";
import generalReducer from "@modules/general/reducer";
import modalReducer from "@modules/modal/reducer";
import authReducer from "@modules/auth/reducer";
import bottomSheetReducer from "@modules/bottomSheet/reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  general: generalReducer,
  bottomSheet: bottomSheetReducer,
});

export default rootReducers;
