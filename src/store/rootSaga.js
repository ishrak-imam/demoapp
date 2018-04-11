
import { fork, all } from 'redux-saga/effects';

import * as authSaga from '../modules/auth/saga';

const sagas = {
  ...authSaga
};

const forkedSagas = Object.keys(sagas).map(key => fork(sagas[key]));

export default function * rootSaga () {
  yield all(forkedSagas);
}
