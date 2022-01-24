import { call, put, takeEvery } from "redux-saga/effects";
import { handleError } from "../../utils/error";
import { actions } from "./reducer";
import AuthService from "./service";

function* registerSaga({ payload }) {
  try {
    console.log("register payl", payload);
    const { data } = payload;
    console.log(
      "🚀 ~ file: saga.js ~ line 9 ~ function*registerSaga ~ data",
      data,
    );
    if (data) {
      const result = yield call(AuthService.register, data);
      console.log(result);
    }
  } catch (e) {
    handleError({ ...e, source: "registerSaga" });
  }
}

export function* onAppStartSaga({ payload }) {
  try {
    const dummyUser = {
      id: "1234",
      fullName: "Milos Delibasic",
      email: "milosdelibasic97@gmail.com",
    };
    yield put({ type: actions.loginSuccess, payload: dummyUser });
  } catch (e) {
    console.log("onAppStartSaga", e);
  } finally {
    // yield call(RNSplash.hide);
  }
}

export default function* authSaga() {
  yield takeEvery(actions.register, registerSaga);
  yield takeEvery(actions.isLogin, onAppStartSaga);
}
