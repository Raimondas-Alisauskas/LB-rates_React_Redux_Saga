import axios from 'axios';
import { getElementsValues } from './utils';

export const getCurrencyList = async () => {
  let currencyList = [];
  await axios
    .get(
      'https://cors.io/?http://old.lb.lt/webservices/fxrates/FxRates.asmx/getCurrencyList'
    )
    .then(response => {
      const values = getElementsValues(response, 'Ccy');
      const lables = getElementsValues(response, '[lang="EN"]');
      currencyList = values.map((value, index) => ({
        value: value,
        label: lables[index]
      }));
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
  return currencyList;
};
