
import {createReducer, updateObject} from '../../utils/reduxHelpers';

import {
  LOGIN_REQ, LOGIN_SUCS, LOGIN_FAIL
} from './action';

const LOGIN = {
  loading: false
};

export const login = createReducer(LOGIN, {
  [LOGIN_REQ]: (state) => updateObject(state, {loading: true}),
  [LOGIN_SUCS]: (state) => updateObject(state, {loading: false}),
  [LOGIN_FAIL]: (state) => updateObject(state, {loading: false})
});
