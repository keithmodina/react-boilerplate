import { combineReducers } from 'redux';
import user from './appInitial';

const reducers = {
  common: combineReducers({
    user
  })
};

export default reducers;
