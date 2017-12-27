import { combineReducers, createStore, applyMiddleware, } from 'redux';
import shelf from './shelf/reducers'
import thunk from 'redux-thunk'

const reducers = combineReducers( { shelf: shelf } )

export default function store() {
  return createStore( reducers, applyMiddleware( thunk ) );
}
