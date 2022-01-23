import {put, takeEvery} from 'redux-saga/effects';
import {actions} from './reducer';

export function* onAppStartSaga({payload}) {
  try {
    const dummyUser = {
      id: '1234',
      fullName: 'Milos Delibasic',
      email: 'milosdelibasic97@gmail.com',
    };
    yield put({type: actions.loginSuccess, payload: dummyUser});
  } catch (e) {
    console.log('onAppStartSaga', e);
  } finally {
    // yield call(RNSplash.hide);
  }
}

export default function* authSaga() {
  yield takeEvery(actions.isLogin, onAppStartSaga);
}
