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

// Enable Redux dev tools
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

const store = createStore(rootReducer, defaultState, enhancers);

// Weave in history into store
export const history = syncHistoryWithStore(browserHistory, store);

// Enable hot reloading reducers
if (module.hot) {
  module.hot.accept('./reducers/', () => {
    // You cannot use ES6 imports in functions,
    // you have to use CommonJS require syntax
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
