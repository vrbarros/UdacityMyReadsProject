import * as types from './actions'

function search( state = {
  query: '',
  results: '',
}, action ) {
  switch ( action.type ) {
    case types.SEARCH:
      // Load the shelf with all books from API
      return { query: action.query, results: action.books, }
    default:
      return state;
  }
}

export default search;
