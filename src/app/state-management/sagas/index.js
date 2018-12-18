import { all, fork } from 'redux-saga/effects';

import fixRateData from './fixRateData';

export default function* root() {
  yield all([fork(fixRateData)]);
}
