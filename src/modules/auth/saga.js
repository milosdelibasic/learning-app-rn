import { call, delay, put, takeEvery } from "redux-saga/effects";
import RNBootSplash from "react-native-bootsplash";
import * as RootNavigation from "@navigation/RootNavigation";
import { handleError, handleSuccess } from "@utils/error";
import { logger } from "@config/helpers";
import { actions } from "./reducer";
import AuthService from "./service";
import { homeStack, mainStack } from "@config/navigator";
import AsyncStorage from "@react-native-async-storage/async-storage";

function* registerSaga({ payload }) {
  try {
    console.log("register payl", payload);
    const { data } = payload;
    console.log(
      "🚀 ~ file: saga.js ~ line 9 ~ function*registerSaga ~ data",
      data,
    );
    if (data) {
      const { data: result } = yield call(AuthService.register, data);
      if (result) {
        console.log("reza", result.data);
        yield call(handleSuccess, { message: "Successfully registered" });
        const { data: finalData } = result;
        yield call(loginSuccessSaga, result);
      }
    }
  } catch (e) {
    yield call(handleError, { ...e, source: "registerSaga" });
  }
}

function* loginSaga({ payload }) {
  try {
    console.log("login payl", payload?.data);
    if (payload?.data) {
      const { data } = yield call(AuthService.login, payload?.data);
      const { data: result } = data;
      console.log("LOGIN  DATA", data.data);
      if (result) {
        yield call(handleSuccess, { message: "Successfully login" });
        yield call(loginSuccessSaga, result);
        // yield call(RootNavigation.navigate, homeStack.home);
      }
    }
  } catch (e) {
    yield call(handleError, { ...e, source: "loginSaga" });
  }
}

function* loginSuccessSaga(data) {
  try {
    console.log("login success", data);
    if (data) {
      yield put({ type: actions.loginSuccess, payload: data });
      yield call(AsyncStorage.setItem, "user", JSON.stringify(data));
    }
  } catch (e) {
    yield call(handleError, { ...e, source: "loginSuccessSaga" });
  }
}

function* signOutSaga() {
  try {
    yield call(AsyncStorage.removeItem, "user");
  } catch (e) {
    yield call(handleError, { ...e, source: "singOutSaga" });
  }
}

export function* onAppStartSaga({ payload }) {
  try {
    const data = yield call(AsyncStorage.getItem, "user");
    const parsedData = JSON.parse(data);
    console.log("app start user", parsedData);
    if (parsedData) {
      yield call(loginSuccessSaga, parsedData);
    } else {
      yield put({ type: actions.loginFailed });
    }
  } catch (e) {
    logger("onAppStartSaga", e);
  } finally {
    yield call(RNBootSplash.hide, { fade: true });
  }
}

export default function* authSaga() {
  yield takeEvery(actions.register, registerSaga);
  yield takeEvery(actions.login, loginSaga);
  yield takeEvery(actions.signOut, signOutSaga);
  yield takeEvery(actions.isLogin, onAppStartSaga);
}
