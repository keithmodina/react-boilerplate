import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import { actionNavigateTo } from '../../reduxModules/common/routes';

import { ROUTE_DEMO_LIST } from '../../constants/routes';

const Home = ({
  actionNavigateTo
}) => {
  return (
    <Fragment>
        <div>Home</div>
        <a onClick={() => actionNavigateTo(ROUTE_DEMO_LIST)}>Demo</a>
    </Fragment>
  );
};

export default connect(state => ({
  location: state.location
}), {
  actionNavigateTo
})(Home);
