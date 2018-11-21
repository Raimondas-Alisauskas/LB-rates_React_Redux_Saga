import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import Paper from '@material-ui/core/Paper/Paper';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import TextField from '@material-ui/core/TextField';

import styles from './styles';

const MainForm = ({
  classes,
  currency,
  from,
  to,
  currencyRate,
  handleInputChange,
  handleSubmit
}) => (
  <main className={classes.main}>
    <CssBaseline />
    <Paper className={classes.paper}>
      <Typography component="h5" variant="h5">
        LBank.lt Request
      </Typography>
      <form
        className={classes.form}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
      >
        <TextField
          name="currency"
          value={currency}
          label="Currency"
          className={classes.textField}
          margin="normal"
          required
          fullWidth
        />
        <TextField
          name="from"
          value={from}
          label="From"
          className={classes.textField}
          margin="normal"
          required
        />
        <TextField
          name="to"
          value={to}
          label="To"
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
          Submit
        </Button>
      </form>
      <TextField
        name="answer"
        value={currencyRate}
        label="Currency rate:"
        className={classes.textField}
        margin="normal"
        InputProps={{ readOnly: true }}
        fullWidth
      />
    </Paper>
  </main>
);

MainForm.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  currency: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  currencyRate: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default withStyles(styles)(MainForm);
