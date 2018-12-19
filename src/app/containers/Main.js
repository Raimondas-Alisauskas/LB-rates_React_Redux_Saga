import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../state-management/actions';
import MainForm from '../components/mainForm';

class Main extends Component {
  componentDidMount = () => {
    this.props.loadCurrencyList();
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
        currencyList={this.props.currencyList}
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
  currencyList: state.main.currencyList,
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
  loadCurrencyList: () => dispatch(actionCreators.loadCurrencyListRequest()),
  loadFixRate: () => dispatch(actionCreators.loadFixRateRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
