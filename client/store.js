import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import root reducer
import rootReducer from './reducers/index';

// Import dummy data
import comments from './data/comments';
import posts from './data/posts';

// Create an object for the default data
const defaultState = {
  posts,
  comments
};

const store = createStore(rootReducer, defaultState);

// Weave in history into store
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
