import React, { Component } from 'react';
import axios from 'axios';

import MainForm from '../components/mainForm/MainForm';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: '',
      date: '',
      currencyRate: '0'
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.getFxRatesForCurrency(this.state.currency, this.state.date);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  getFxRatesForCurrency = (currency, date) => {
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

        const xmlDoc = new DOMParser().parseFromString(
          response.data,
          'text/xml'
        );
        const amtValue = xmlDoc.getElementsByTagName('Amt')[1].textContent;
        this.setState({ currencyRate: amtValue });
        console.log(response.data);
        console.log(xmlDoc);
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
        date={this.state.date}
        currencyRate={this.state.currencyRate}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default Main;
