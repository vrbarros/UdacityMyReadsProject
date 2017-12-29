import { createStore, applyMiddleware, combineReducers, compose, } from 'redux';
import thunk from 'redux-thunk';

// Import reducers to be combined
import shelf from '../shelf/reducers';
import search from '../search/reducers';

// Activate ReduxDevTools enhance
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Combine reducers
const rootReducer = combineReducers( { shelf, search } );

// Create store with all enhancement
const configureStore = createStore( rootReducer, composeEnhancers( applyMiddleware( thunk ) ) );

export default configureStore;
