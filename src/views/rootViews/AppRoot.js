import React, {
    lazy,
    Suspense
  } from 'react';
  import { connect } from 'react-redux';
  import { NOT_FOUND } from 'redux-first-router';
  
  import { ROUTE_ERROR_400,
    ROUTE_ERROR_403,
    ROUTE_ERROR_404,
    ROUTE_ERROR_500,
    ROUTE_ERROR_502,
    ROUTE_ERROR_503,
    ROUTE_HOME,
    ROUTE_DEMO_LIST
  } from '../../constants/routes';
  import {
    error400,
    error403,
    error404,
    error500,
    error502,
    error503
  } from '../../constants/pageErrorTypes';
  
  const EntryRoot = lazy(() => import('./EntryRoot'));
  const ViewRoot = lazy(() => import('./ViewRoot'));
  const Error = lazy(() => import('../components/Error'));
  
  const AppRoot = ({
    locationType
  }) => {
    const viewLayouts = () => (
      <Suspense fallback={<div />}>
        <ViewRoot location={locationType} />
      </Suspense>
    );
  
    const entryLayouts = () => (
      <Suspense fallback={<div />}>
        <EntryRoot location={locationType} />
      </Suspense>
    );
  
    const ErrorPage = errorType => (
      <Suspense fallback={<div />}>
        <Error errorType={errorType} />
      </Suspense>
    );
  
    const routes = () => {
      switch (locationType) {
        // add component in views/layouts/AppRoutes
        case ROUTE_HOME:
          return entryLayouts();
        case ROUTE_DEMO_LIST:
          return viewLayouts();
        case ROUTE_ERROR_400:
          return ErrorPage(error400);
        case ROUTE_ERROR_403:
          return ErrorPage(error403);
        case ROUTE_ERROR_404:
        case NOT_FOUND:
          return ErrorPage(error404);
        case ROUTE_ERROR_500:
          return ErrorPage(error500);
        case ROUTE_ERROR_502:
          return ErrorPage(error502);
        case ROUTE_ERROR_503:
          return ErrorPage(error503);
        default:
          return null;
      }
    };
  
    return routes();
  };
  
  export default connect(state => ({
    locationType: state.location.type
  }))(AppRoot);
  