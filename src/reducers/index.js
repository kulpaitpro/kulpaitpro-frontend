import { combineReducers } from 'redux';

const postsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_POSTS':
      return {
        pagination: action.payload.pagination,
        default: action.payload.posts,
        home: action.payload.posts.slice(0, 6),
        slider: action.payload.posts.slice(0, 3),
        blog: action.payload.posts
      };
    default:
      return state
  }
};

const showLoaderReducer = (state = 'none', action) => {
  switch(action.type) {
    case 'SHOW_LOADER':
      return action.payload;
    default:
      return state
  }
};

// register reducers
export default combineReducers({
  posts: postsReducer,
  showLoader: showLoaderReducer
});