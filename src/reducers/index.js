import { combineReducers } from 'redux';

const initState = {
  loaders: {
    banner: false,
    cms: false,
    header: false,
    menu: false,
    portfolio: false
  }
}

const showLoaderReducer = (state = initState, action) => {
  const {payload} = action;
  
  switch(action.type) {
    case 'UPDATE_LOADER':
      return {
        ...state, 
        loaders: {...state.loaders, ...payload}
      };
    default:
      return state
  }
};

// register reducers
export default combineReducers({
  showLoaderReducer
});