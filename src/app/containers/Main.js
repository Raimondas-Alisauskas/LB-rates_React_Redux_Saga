import React, { Component } from 'react';
import axios from 'axios';

import MainForm from '../components/mainForm/MainForm';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: '',
      from: '',
      to: '',
      currencyRate: '0'
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.getFxRateForCurrency(this.state.currency, this.state.from);
  };

  getFxRateForCurrency = (currency, date) => {
    axios
      .get(
        `https://cors.io/?http://old.lb.lt//webservices/fxrates/FxRates.asmx/getFxRatesForCurrency?tp=EU&ccy=${currency}&dtFrom=${date}&dtTo=${date}`
      )
      .then(response => {
        // const answer = response.data;
        // console.log(answer);
        // if (window.DOMParser) {
        //   // code for modern browsers
        //   const parser = new DOMParser();
        //   const xmlDoc = parser.parseFromString(answer, 'text/xml');
        // } else {
        //   // code for old IE browsers
        //   const xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
        //   xmlDoc.async = false;
        //   xmlDoc.loadXML(answer);
        // }
        console.log(response.data);

        const xmlDoc = new DOMParser().parseFromString(
          response.data,
          'text/xml'
        );

        console.log(xmlDoc);

        const amtValue = xmlDoc.getElementsByTagName('Amt')[1].textContent;
        this.setState({ currencyRate: amtValue });

        console.log(amtValue);
      })
      .catch(error => {
        alert(error);
      });
  };

  render() {
    return (
      <MainForm
        currency={this.state.currency}
        from={this.state.from}
        to={this.state.to}
        currencyRate={this.state.currencyRate}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default Main;
