import { all, call } from 'redux-saga/effects';

import { quoteSagas } from './quotes';

export default function* rootSaga() {
  yield all([call(quoteSagas)]);
}
