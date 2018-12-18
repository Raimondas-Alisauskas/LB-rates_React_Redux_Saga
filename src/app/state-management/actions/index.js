import * as actionTypes from '../constants';

export const changeInputs = (name, value) => ({
  type: actionTypes.CHANGE_INPUTS,
  name: name,
  value: value
});

export const loadFixRate = () => ({
  type: actionTypes.LOAD_FIXRATE_REQUEST
});

export const loadFixRateSuccess = response => {
  return {
    type: actionTypes.LOAD_FIXRATE_SUCCESS,
    response
  };
};
