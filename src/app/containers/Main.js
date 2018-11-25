import React, { Component } from 'react';
import axios from 'axios';
import MainForm from '../components/mainForm/MainForm';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'USD',
      from: '2018-01-01',
      to: '2018-02-01',
      currencyRate1: '0',
      currencyRate2: '0',
      difference: '0'
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const getFxRateForCurrency = (currency, date1, date2) => {
      axios
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
            // console.log(response1.data);
            // console.log(response2.data);
            const value1 = getElementValueFromResponse(response1, 'Amt');
            const value2 = getElementValueFromResponse(response2, 'Amt');
            this.setState({ currencyRate1: value1 });
            this.setState({ currencyRate2: value2 });
            this.setState({ difference: (value2 - value1).toFixed(4) });
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
    };

    const getElementValueFromResponse = (response, element) => {
      const xmlDoc = new DOMParser().parseFromString(response.data, 'text/xml');
      return xmlDoc.getElementsByTagName(element)[1].textContent;
    };

    getFxRateForCurrency(this.state.currency, this.state.from, this.state.to);
  };

  render() {
    return (
      <MainForm
        currency={this.state.currency}
        from={this.state.from}
        to={this.state.to}
        currencyRate1={this.state.currencyRate1}
        currencyRate2={this.state.currencyRate2}
        difference={this.state.difference}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default Main;
