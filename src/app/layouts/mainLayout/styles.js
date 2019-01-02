const drawerWidth = 240;
const styles = theme => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    marginLeft: drawerWidth
  }
});

export default styles;
