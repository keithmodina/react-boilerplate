import combineThunks from '../utils/combineThunks';
import { ROUTE_HOME, ROUTE_DEMO_LIST } from '../constants/routes';

const handlePageSwitch = () => async (dispatch, getState) => {
    // dispatch(actionHere())
};

const routesMap = {
  [ROUTE_HOME]: {
    path: '/',
    thunk: combineThunks(
      handlePageSwitch()
    )
  },
  [ROUTE_DEMO_LIST]: {
    path: '/demo',
    thunk: combineThunks(
    handlePageSwitch()
    )
  }
};

export default routesMap;
