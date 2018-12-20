import axios from 'axios';
import { getElementsValues } from './utils';

export const getFxRateForCurrency = async (currency, date1, date2) => {
  let currencyRates = {
    currencyRate1: '0.0000',
    currencyRate2: '0.0000'
  };
  await axios
    .all([
      axios.get(
        `https://cors.io/?http://old.lb.lt//webservices/fxrates/FxRates.asmx/getFxRatesForCurrency?tp=EU&ccy=${currency}&dtFrom=${date1}&dtTo=${date1}`
      ),
      axios.get(
        `https://cors.io/?http://old.lb.lt//webservices/fxrates/FxRates.asmx/getFxRatesForCurrency?tp=EU&ccy=${currency}&dtFrom=${date2}&dtTo=${date2}`
      )
    ])
    .then(
      axios.spread((response1, response2) => {
        const currencyRate1 = getElementsValues(response1, 'Amt')[1];
        const currencyRate2 = getElementsValues(response2, 'Amt')[1];
        const errorMsg1 = getElementsValues(response1, 'Desc');
        const errorMsg2 = getElementsValues(response2, 'Desc');

        if (errorMsg1.length === 0 && errorMsg2.length === 0) {
          currencyRates = {
            currencyRate1: currencyRate1,
            currencyRate2: currencyRate2
          };
        } else {
          alert(errorMsg1, errorMsg2);
        }
      })
    )
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
