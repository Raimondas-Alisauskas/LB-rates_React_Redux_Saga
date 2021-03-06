import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import Paper from '@material-ui/core/Paper/Paper';
import Button from '@material-ui/core/Button/Button';
import TextField from '@material-ui/core/TextField';

import styles from './styles';

const mainForm = ({
  classes,
  isLoading,
  currencyList,
  currency,
  from,
  to,
  currencyRate1,
  currencyRate2,
  difference,
  handleInputChange,
  handleSubmit
}) => (
  <main className={classes.main}>
    <CssBaseline />
    <Paper className={classes.paper}>
      <form
        className={classes.form}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
      >
        <TextField
          name="currency"
          select
          fullWidth
          required
          label="Currency"
          value={currency}
          SelectProps={{
            native: true
          }}
          margin="normal"
        >
          {currencyList.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          name="from"
          value={from}
          label="From date"
          type="date"
          className={classes.textField}
          margin="normal"
          required
        />
        <TextField
          name="to"
          value={to}
          label="To date"
          type="date"
          className={classes.textField}
          margin="normal"
          required
        />
        <Button
          className={classes.submit}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          {isLoading ? 'Loading...' : 'Submit'}
        </Button>

        <TextField
          name="answer1"
          value={currencyRate1}
          label="Rate at From date"
          className={classes.textField}
          margin="normal"
          InputProps={{ readOnly: true }}
        />
        <TextField
          name="answer2"
          value={currencyRate2}
          label="Rate at To date"
          className={classes.textField}
          margin="normal"
          InputProps={{ readOnly: true }}
        />
        <TextField
          name="answer3"
          value={difference}
          label="Rate difference"
          className={classes.textField}
          margin="normal"
          InputProps={{ readOnly: true }}
          fullWidth
        />
      </form>
    </Paper>
  </main>
);

mainForm.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  currencyList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
  currency: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  currencyRate1: PropTypes.string.isRequired,
  currencyRate2: PropTypes.string.isRequired,
  difference: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default withStyles(styles)(mainForm);
