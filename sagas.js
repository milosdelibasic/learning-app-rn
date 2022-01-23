import {all} from 'redux-saga/effects';
import authSaga from './src/modules/auth/saga';
import generalSaga from './src/modules/general/saga';

/**
 * Root saga
 * @returns {IterableIterator<AllEffect | GenericAllEffect<any> | *>}
 */
export default function* rootSagas() {
  yield all([generalSaga(), authSaga()]);
}
