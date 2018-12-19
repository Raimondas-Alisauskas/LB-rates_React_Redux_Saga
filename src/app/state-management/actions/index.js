import * as actionTypes from '../constants';

export const changeInputs = (name, value) => ({
  type: actionTypes.CHANGE_INPUTS,
  name: name,
  value: value
});

export const loadCurrencyListRequest = () => ({
  type: actionTypes.LOAD_CURRENCY_LIST_REQUEST
});

export const loadCurrencyListSuccess = currencyList => {
  return {
    type: actionTypes.LOAD_CURRENCY_LIST_SUCCESS,
    currencyList
  };
};

export const loadFixRateRequest = () => ({
  type: actionTypes.LOAD_FIXRATE_REQUEST
});

export const loadFixRateSuccess = response => {
  return {
    type: actionTypes.LOAD_FIXRATE_SUCCESS,
    response
  };
};
