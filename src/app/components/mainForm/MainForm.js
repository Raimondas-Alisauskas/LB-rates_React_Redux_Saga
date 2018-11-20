import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import Paper from '@material-ui/core/Paper/Paper';
import Typography from '@material-ui/core/Typography/Typography';
import FormControl from '@material-ui/core/FormControl/FormControl';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Input from '@material-ui/core/Input/Input';
import Button from '@material-ui/core/Button/Button';
// import TextField from '@material-ui/core/TextField';

import styles from './styles';

const MainForm = ({
  classes,
  currency,
  date,
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
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel required={true}>Currency</InputLabel>
          <Input
            id="Currency"
            name="currency"
            autoFocus
            value={currency}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel required={true}>Date</InputLabel>
          <Input
            id="Date"
            name="date"
            value={date}
            onChange={handleInputChange}
          />
        </FormControl>
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
      <div className={classes.answer}>
        <Typography component="h6" variant="h6">
          Currency rate: {currencyRate}
        </Typography>
      </div>
    </Paper>
  </main>
);

MainForm.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  currency: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  currencyRate: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default withStyles(styles)(MainForm);
