import React, { Component } from 'react';

import PropTypes from 'prop-types';

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
    this.props.request(this.state.currency, this.state.date);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
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

Main.propTypes = {
  request: PropTypes.func.isRequired
};

export default Main;
