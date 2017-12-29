import * as types from './actions'

function search( state = {}, action ) {
  switch ( action.type ) {
    case types.SEARCH:
      console.log( state, action );
      return state;
    default:
      return state;
  }
}

export default search;
