import * as actionTypes from '../constants';

const initialState = {
  isloading: false,
  currency: 'USD',
  from: '2018-01-01',
  to: '2018-02-01',
  currencyRate1: '0',
  currencyRate2: '0',
  difference: '0'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_INPUTS:
      return {
        ...state,
        [action.name]: action.value
      };
    case actionTypes.LOAD_FIXRATE_REQUEST:
      return {
        ...state,
        isloading: true
      };
    case actionTypes.LOAD_FIXRATE_SUCCESS:
      return {
        ...state,
        isloading: false,
        currencyRate1: action.response.currencyRate1,
        currencyRate2: action.response.currencyRate2,
        difference: (
          action.response.currencyRate2 - action.response.currencyRate1
        ).toFixed(4)
      };

    default:
      return state;
  }
};
