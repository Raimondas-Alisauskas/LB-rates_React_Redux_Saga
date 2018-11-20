import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    this.props.getFxRatesForCurrency(this.state.currency, this.state.date);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  //   getFxRatesForCurrency = (currency, date)=>{

  //   }

  componentDidMount() {
    axios
      .get(
        `https://cors.io/?http://old.lb.lt//webservices/fxrates/FxRates.asmx/getFxRatesForCurrency?tp=EU&ccy=USD&dtFrom=2017-01-01&dtTo=2017-01-01`
      )
      .then(response => {
        const answer = response.data;
        console.log(answer);
      })
      .catch(error => {
        console.log(error);
      });
  }

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

Main.propTypes = {
  request: PropTypes.func.isRequired
};

export default Main;
