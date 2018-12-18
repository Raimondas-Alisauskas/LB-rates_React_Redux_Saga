import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCurrencyList } from '../server/getCurrencyList';
import * as actionCreators from '../state-management/actions';
import MainForm from '../components/mainForm/mainForm';

class Main extends Component {
  componentDidMount = () => {
    getCurrencyList();
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.props.changeInputs(name, value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.loadFixRate();
  };

  render() {
    return (
      <MainForm
        isLoading={this.props.isLoading}
        currency={this.props.currency}
        from={this.props.from}
        to={this.props.to}
        currencyRate1={this.props.currencyRate1}
        currencyRate2={this.props.currencyRate2}
        difference={this.props.difference}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.main.isLoading,
  currency: state.main.currency,
  from: state.main.from,
  to: state.main.to,
  currencyRate1: state.main.currencyRate1,
  currencyRate2: state.main.currencyRate2,
  difference: state.main.difference
});

const mapDispatchToProps = dispatch => ({
  changeInputs: (name, value) =>
    dispatch(actionCreators.changeInputs(name, value)),
  loadFixRate: () => dispatch(actionCreators.loadFixRate())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
