import axios from 'axios';
import { getAllElementsValuesFromResponse } from './utils';

export const getCurrencyList = async () => {
  let responseValue = {};
  await axios
    .get(
      'https://cors.io/?http://old.lb.lt/webservices/fxrates/FxRates.asmx/getCurrencyList'
    )
    .then(response => {
      responseValue = getAllElementsValuesFromResponse(response, 'Ccy');
    })
    .catch(error => {
      if (error.response) {
        alert(
          'Problem with Lb.lt server responce. Please try another time or conect directly' +
            'https://www.lb.lt/lt/kasdien-skelbiami-euro-ir-uzsienio-valiutu-santykiai-skelbia-europos-centrinis-bankas'
        );
      } else if (error.request) {
        alert('The request was made but no response was received');
      } else {
        alert('Please put the valid data');
      }
    });

  return responseValue;
};
