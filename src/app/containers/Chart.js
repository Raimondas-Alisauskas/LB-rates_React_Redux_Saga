import React from 'react';
import { connect } from 'react-redux';

import ChartLine from '../components/ChartLine/ChartLine';

class Chart extends React.Component {
  render() {
    return <ChartLine currencyRateArray={this.props.currencyRateArray} />;
  }
}

const mapStateToProps = state => ({
  currencyRateArray: state.main.currencyRateArray
});

export default connect(
  mapStateToProps,
  null
)(Chart);
