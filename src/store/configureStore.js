import {createStore, applyMiddleware, combineReducers} from 'redux'
import shelf from '../shelf/reducers'
import thunk from 'redux-thunk'

const rootReducer = combineReducers( { shelf } )

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}
