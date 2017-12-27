import * as types from './actions'

const initialState = {
  books: [],
}

export default function shelf(state = initialState.books, action) {
  switch(action.type) {
    case types.ALL:
      return action.books
    default:
      return state
  }
}
