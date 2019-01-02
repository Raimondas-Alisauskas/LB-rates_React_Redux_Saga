import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';

import styles from './styles';
import { mainRoutes } from '../../routes/mainRoutes';
// const mainRoutes = (
//   <Switch>
//     <Route
//       path="/request"
//       render={props => <Request routesStore={routesStore} {...props} />}
//     />
//     <Route
//       path="/chart"
//       render={props => <Chart routesStore={routesStore} {...props} />}
//     />

//     <Redirect from="/" to="/request" />
//   </Switch>
// );

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
  render() {
    const { classes, ...rest } = this.props;
    console.log('MainLayoutProps', this.props);
    console.log('MainLayoutProps', this.props.match);
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
  container: PropTypes.object,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MainLayout);