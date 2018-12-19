import { all, put, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../constants';
import { getCurrencyList, getFxRateForCurrency } from '../../server';
import { loadCurrencyListSuccess, loadFixRateSuccess } from '../actions';
import store from '../store';

function* main() {
  yield all([
    takeLatest(actionTypes.LOAD_CURRENCY_LIST_REQUEST, getCurrencySaga),
    takeLatest(actionTypes.LOAD_FIXRATE_REQUEST, getFixRateSaga)
  ]);
}
function* getCurrencySaga() {
  const response = yield getCurrencyList();
  yield put(loadCurrencyListSuccess(response));
}

function* getFixRateSaga() {
  const currency = store.getState().main.currency;
  const date1 = store.getState().main.from;
  const date2 = store.getState().main.to;
  const response = yield getFxRateForCurrency(currency, date1, date2);
  yield put(loadFixRateSuccess(response));
}

export default main;
