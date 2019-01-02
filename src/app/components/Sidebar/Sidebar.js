import React from 'react';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

import styles from './styles';

const Sidebar = ({ classes, ...props }) => {
  console.log('Sidebar', props);
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={true}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {props.mainRoutes.map((item, index) => (
          <Link to={item.path} key={index}>
            <ListItem button key={item.appBarName}>
              <ListItemIcon>
                <Icon component={item.icon} />
              </ListItemIcon>
              <ListItemText primary={item.appBarName} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default withStyles(styles)(Sidebar);
