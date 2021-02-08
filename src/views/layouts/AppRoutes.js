import React, { lazy } from 'react';

import {
  ROUTE_HOME,
  ROUTE_DEMO_LIST
} from '../../constants/routes';

import Home from '../appHome';

import Demo from '../demo';

const AppRoutes = ({ location }) => {
  switch (location) {
    case ROUTE_HOME:
      return <Home />;
    case ROUTE_DEMO_LIST:
      return <Demo />;
    default:
      return null;
  }
};

export default AppRoutes;
