import React, { Component } from 'react';

import { getFxRateForCurrency } from '../server/lbApi';
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

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  async handleSubmit(event) {
    event.preventDefault();

    const getValuesFromServer = new Promise(resolve => {
      resolve(
        getFxRateForCurrency(
          this.state.currency,
          this.state.from,
          this.state.to
        )
      );
    });

    getValuesFromServer.then(responseValues => {
      this.setState({
        currencyRate1: responseValues.currencyRate1,
        currencyRate2: responseValues.currencyRate2,
        difference: (
          responseValues.currencyRate2 - responseValues.currencyRate1
        ).toFixed(4)
      });
    });
  }

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
