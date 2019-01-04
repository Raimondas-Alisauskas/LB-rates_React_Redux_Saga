import * as actionTypes from '../constants';

const initialState = {
  isLoading: false,
  currencyList: [],
  currency: 'USD',
  label: 'US dollar',
  from: '2018-01-02',
  to: '2018-01-03',
  currencyRateArray: [{ rate: '0' }],
  currencyRate1: '0.0000',
  currencyRate2: '0.0000',
  difference: '0.0000'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_INPUTS:
      return {
        ...state,
        [action.name]: action.value
      };

    case actionTypes.LOAD_CURRENCY_LIST_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.LOAD_CURRENCY_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currencyList: action.currencyList
      };

    case actionTypes.LOAD_FIXRATE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.LOAD_FIXRATE_SUCCESS:
      const currencyRateArray = action.currencyRates.currencyRateArray;
      const currencyRate1 = action.currencyRates.currencyRate1;
      const currencyRate2 = action.currencyRates.currencyRate2;
      return {
        ...state,
        isLoading: false,
        currencyRateArray: currencyRateArray,
        currencyRate1: currencyRate1,
        currencyRate2: currencyRate2,
        difference: (currencyRate2 - currencyRate1).toFixed(4)
      };

    default:
      return state;
  }
};
