import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import rootReducers from "./reducers";
import rootSagas from "./sagas";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const configureAdminStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  const store = configureStore({
    reducer: persistedReducer,
    middleware: [
      ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
      ...middlewares,
    ],
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== "production",
  });

  sagaMiddleware.run(rootSagas);

  return { store };
};

export default configureAdminStore;
