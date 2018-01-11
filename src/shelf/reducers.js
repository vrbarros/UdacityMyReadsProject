import * as types from './actions'

function shelf( state = {}, action ) {
  switch ( action.type ) {
    case types.ALL:
      // Load the shelf with all books from API
      return action.shelf;
    case types.UPDATE_BOOK:
      // Send the update command
      // Build the book object
      var book = action.book;
      book.shelf = action.shelf;
      // If not, add the books
      return {
        ...state
      }

    default:
      return [...state];
  }
}

export default shelf;
