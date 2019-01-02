import Request from '../containers/Request';
import Chart from '../containers/Chart';

import Assignment from '@material-ui/icons/Assignment';
import Assessment from '@material-ui/icons/Assessment';

export const mainRoutes = [
  {
    path: '/request',
    component: Request,
    appBarName: 'Request to LB.lt',
    icon: Assignment
  },
  {
    path: '/chart',
    component: Chart,
    appBarName: 'Chart',
    icon: Assessment
  },
  {
    redirect: true,
    path: '/',
    to: '/request'
  }
];
