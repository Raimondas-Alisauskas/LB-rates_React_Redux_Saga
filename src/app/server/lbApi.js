import axios from 'axios';

export const getFxRateForCurrency = async (currency, date1, date2) => {
  let responseValues = {};
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
        const value1 = getElementValueFromResponse(response1, 'Amt');
        const value2 = getElementValueFromResponse(response2, 'Amt');
        responseValues = {
          currencyRate1: value1,
          currencyRate2: value2
        };
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
        responseValues = {
          currencyRate1: '0',
          currencyRate2: '0'
        };
      } else {
        alert('Please put the valid data');
      }
    });

  return responseValues;
};

const getElementValueFromResponse = (response, element) => {
  const xmlDoc = new DOMParser().parseFromString(response.data, 'text/xml');
  return xmlDoc.getElementsByTagName(element)[1].textContent;
};
