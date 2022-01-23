import AsyncStorage from '@react-native-async-storage/async-storage';
import {call, put, takeEvery} from 'redux-saga/effects';
import {actions} from './reducer';

// function* setThemeSaga() {
//   try {
//     const theme = yield call(AsyncStorage.getItem, "theme");
//     yield put({ type: actions.setTheme, payload: theme });
//     const car = yield call(AsyncStorage.getItem, "car");
//     console.log("saga car", car);
//     if (car) {
//       yield put({ type: actions.setCar, payload: car });
//     }
//     const plate = yield call(AsyncStorage.getItem, "plate");
//     if (plate) {
//       yield put({ type: actions.setPlate, payload: plate });
//     }
//   } catch (e) {
//     console.log(e);
//   }
// }

// function* toggleThemeSaga(theme) {
//   try {
//     if (theme.payload === "light") {
//       yield put({ type: actions.setLight });
//     }
//     if (theme.payload === "dark") {
//       yield put({ type: actions.setDark });
//     }
//     yield call(AsyncStorage.setItem, "theme", theme.payload);
//   } catch (e) {
//     console.log(e);
//   }
// }

export default function* generalSaga() {
  // yield takeEvery(actions.setTheme, setThemeSaga);
  // yield takeEvery(actions.toggleTheme, toggleThemeSaga);
}
