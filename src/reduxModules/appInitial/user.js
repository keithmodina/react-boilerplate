import { GET_PROFILE } from './index';
  
  export const initialState = {
    profile: {},
  };
  
  const user = (state = initialState, action = {}) => {
    switch (action.type) {
      case GET_PROFILE:
        return {
          ...state,
          user: action.payload
        };
      default:
        return state;
    }
  };
  
  export default user;
  