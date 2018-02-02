import * as types from './actions'

function search( state = {}, action ) {
  switch ( action.type ) {
    case types.SEARCH:
      // Send message to console
      console.log( "Search now..." );
      // Load the shelf with all books from API
      return { query: action.query, results: action.books };
    case types.EMPTY_SEARCH:
      console.log( "Empty search..." );
      return { };
    default:
      return { ...state };
  }
}

export default search;
