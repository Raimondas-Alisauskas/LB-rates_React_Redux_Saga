import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';

import { withStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import Paper from '@material-ui/core/Paper/Paper';

import styles from './styles';

const ChartLine = ({ classes, currencyRateArray }) => {
  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <LineChart
          width={400}
          height={300}
          data={currencyRateArray}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="rate" stroke="#8884d8" />
          <XAxis />
          <YAxis type="number" domain={['auto', 'auto']} />
          <Tooltip />
        </LineChart>
      </Paper>
    </main>
  );
};

ChartLine.propTypes = {
  currencyRateArray: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired
};

export default withStyles(styles)(ChartLine);
