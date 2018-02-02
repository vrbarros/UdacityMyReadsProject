import * as types from './actions'

function shelf( state = { books: [] }, action ) {
  switch ( action.type ) {
    case types.ALL:
      // Load the shelf with all books from API
      // Send message to console
      console.log("Get all books now...")
      return action.shelf;
    case types.UPDATE_BOOK:
      // Send the update command
      // Send message to console
      console.log("Update the book now...")
      // Build the book object
      var book = action.book;
      book.shelf = action.shelf;
      // If not, add the books
      return {
        ...state
      }
    default:
      
      return {...state};
  }
}

export default shelf;
