
import {createAction} from '../../utils/reduxHelpers';

export const LOGIN_REQ = 'LOGIN_REQ';
export const LOGIN_SUCS = 'LOGIN_SUCS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const loginReq = createAction(LOGIN_REQ);
export const loginSucs = createAction(LOGIN_SUCS);
export const loginFail = createAction(LOGIN_FAIL);
