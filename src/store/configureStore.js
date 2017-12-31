import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware, } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

// Import reducers to be combined
import shelf from '../shelf/reducers';
import search from '../search/reducers';

export const history = createHistory();
const router = routerMiddleware( history );

// Activate ReduxDevTools enhance
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Combine reducers
const rootReducer = combineReducers( { shelf, search, router: routerReducer, } );

// Create store with all enhancement
const configureStore = createStore( rootReducer, composeEnhancers( applyMiddleware( router, thunk ) ) );

export default configureStore;
