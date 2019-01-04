import React from 'react';
import { withStyles } from '@material-ui/core';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

import styles from './styles';

const Header = ({ classes, ...props }) => {
  const getAppBarName = () => {
    let name;
    props.mainRoutes.map(route => {
      if (route.path === props.location.pathname) {
        name = route.appBarName;
      }
      return null;
    });
    return name;
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.typography}
        >
          {getAppBarName()}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
