import { all, put, takeLatest } from 'redux-saga/effects';
import { getFxRateForCurrency } from '../../server/lbApi';
import { loadFixRateSuccess } from '../actions';
import store from '../store';

function* fixRateData() {
  yield all([takeLatest('LOAD_FIXRATE_REQUEST', getFixRate)]);
}

function* getFixRate() {
  const currency = store.getState().main.currency;
  const date1 = store.getState().main.from;
  const date2 = store.getState().main.to;
  const response = yield getFxRateForCurrency(currency, date1, date2);
  yield put(loadFixRateSuccess(response));
}

export default fixRateData;
