import * as types from './actions'

function shelf( state = {}, action ) {
  switch ( action.type ) {
    case types.ALL:
      // Return console message
      console.log( 'Get all books from API' );
      // Load the shelf with all books from API
      return action.shelf;
    default:
      return state;
  }
}

export default shelf;
