import axios from 'axios';
import { getElementsValues } from './utils';

export const getFxRateForCurrency = async (currency, date1, date2) => {
  let currencyRates = {
    currencyRateArray: [],
    currencyRate1: '0.0000',
    currencyRate2: '0.0000'
  };

  await axios
    .get(
      `https://cors.io/?http://old.lb.lt//webservices/fxrates/FxRates.asmx/getFxRatesForCurrency?tp=EU&ccy=${currency}&dtFrom=${date1}&dtTo=${date2}`
    )
    .then(response => {
      const currencyRateArray = getElementsValues(response, 'Amt').filter(
        (e, i) => i % 2 !== 0
      );
      const currencyRate1 = currencyRateArray.slice(-1)[0];
      const currencyRate2 = currencyRateArray[0];

      const errorMsg = getElementsValues(response, 'Desc');

      if (errorMsg.length === 0) {
        currencyRates = {
          currencyRateArray: currencyRateArray,
          currencyRate1: currencyRate1,
          currencyRate2: currencyRate2
        };
      } else {
        alert(errorMsg);
      }
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
  return currencyRates;
};
