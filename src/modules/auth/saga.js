
import {call, put} from 'redux-saga/effects';
import {takeFirst} from '../../utils/sagaHelpers';
import {
  loginReq, loginSucs, loginFail
} from './action';
import {loginRequest} from '../../api';
import {Alert} from 'react-native';

export function * watchLogin () {
  yield takeFirst(loginReq.getType(), workerLogin);
}

function * workerLogin (action) {
  try {
    const {message} = yield call(loginRequest, action.payload);
    Alert.alert(message);
    yield put(loginSucs());
  } catch (e) {
    Alert.alert(e.message);
    yield put(loginFail());
  }
}
