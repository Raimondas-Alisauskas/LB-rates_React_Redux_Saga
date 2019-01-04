import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';

import * as actionCreators from '../../state-management/actions';
import styles from './styles';
import { mainRoutes } from '../../routes/mainRoutes';

const switchRoutes = (
  <Switch>
    {mainRoutes.map((route, key) => {
      if (route.redirect)
        return <Redirect from={route.path} to={route.to} key={key} />;
      return <Route path={route.path} component={route.component} key={key} />;
    })}
  </Switch>
);

class MainLayout extends React.Component {
  componentDidMount = () => {
    this.props.loadCurrencyList();
  };

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header mainRoutes={mainRoutes} {...rest} />
        <nav className={classes.drawer}>
          <Sidebar mainRoutes={mainRoutes} {...rest} />
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {switchRoutes}
        </main>
      </div>
    );
  }
}

MainLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object
};

const mapDispatchToProps = dispatch => ({
  loadCurrencyList: () => dispatch(actionCreators.loadCurrencyListRequest())
});

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(MainLayout));
